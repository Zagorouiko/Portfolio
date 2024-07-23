import '../../lib/doom/index.css'
import { useEffect, useRef } from 'react'

function DOOM() {
  const isInitialized = useRef(false)
  const canvasRef = useRef(null)

    useEffect(() => {
      if (!isInitialized.current) {
        isInitialized.current = true;
        (function () {
          var preview = null;
          var doomCanvas = null;
          var fullscreenButton = null;
          var doomContainer = null;
    
          window.Module = {
            monitorRunDependencies: function (toLoad) {
              this.dependencies = Math.max(this.dependencies, toLoad);
            },
            inFullscreen: false,
            dependencies: 0,
            setStatus: null,
            progress: null,
            loader: null,
            canvas: null
          };
    
          function getCanvas () {
            doomCanvas.addEventListener('webglcontextlost', function (event) {
              alert('WebGL context lost. You need to reload the page.');
              event.preventDefault();
            }, false);
    
            doomCanvas.addEventListener('contextmenu', function (event) {
              event.preventDefault();
            });
    
            fullscreenButton.addEventListener('click', function () {
              Module.requestFullscreen(true, false);
            });
    
            return doomCanvas;
          }
    
          function getStatus (status) {
            var loading = status.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
    
            if (loading) {
              var progress = loading[2] / loading[4] * 100;
              Module.progress.innerHTML = progress.toFixed(1) + '%';
    
              if (progress === 100) {
                setTimeout(function () {
                  fullscreenButton.classList.add('visible');
                  Module.loader.classList.add('completed');
                  doomCanvas.classList.add('ready');
                }, 500);
    
                setTimeout(function () {
                  Module.canvas.dispatchEvent(new Event('mousedown'));
                }, 2000);
              }
            }
          }
    
          function onPointerLockChange () {
            Module.inFullscreen = !Module.inFullscreen;
    
            if (!Module.inFullscreen) {
              doomCanvas.classList.remove('centered');
            } else {
              doomCanvas.classList.add('centered');
            }
          }
    
          function onGameClick (game) {
            var doomScript = document.createElement('script');
            document.body.appendChild(doomScript);
            doomScript.type = 'text/javascript';
    
            preview.classList.add('hidden');
            doomScript.src = game + '.js';

            doomCanvas.focus()
          }
    
            // var games = document.getElementsByClassName('doom');
            preview = document.getElementById('preview');
    
            document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;
            document.exitFullscreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen;
    
            document.addEventListener('mozpointerlockchange', onPointerLockChange, false);
            document.addEventListener('pointerlockchange', onPointerLockChange, false);
    
            // games[0].addEventListener('click', onGameClick.bind(null, 'doom1'));
            
            fullscreenButton = document.getElementById('fullscreen');
            Module.progress = document.getElementById('progress');
            Module.loader = document.getElementById('loader');
            doomCanvas = document.getElementById('doom');
            doomContainer = document.querySelector('.doomContainer');

            document.addEventListener('click', function () {
              doomCanvas.focus();
            })
    
            Module.setStatus = getStatus;
            Module.canvas = getCanvas();

            onGameClick('doom1')
        })();
    }}, [])

    return (
    <div className='doomContainer'>
        <canvas id="doom" ref={canvasRef} tabIndex="0"></canvas>
        <div id="loader">
        <span>Loading...</span>
        <span id="progress">0.0%</span>
        </div>

        <button id="fullscreen">Fullscreen</button>

        <div id="preview">
          <div data-game="1" class="doom one"></div>
        </div>
    </div>
    )
  }
  
  export default DOOM
  