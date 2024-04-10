import { useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleSystem(texture) {

    const particlesVertexShader = `
    uniform vec2 uResolution;
    uniform sampler2D uPictureTexture;
    varying vec3 vColor;
    uniform sampler2D uDisplacementTexture;
    attribute float aIntensity;
    attribute float aAngle;

    void main()
    {
        // Displacement
        vec3 newPosition = position;
        float displacementIntensity = texture(uDisplacementTexture, uv).r;
        displacementIntensity = smoothstep(0.1, 1.0, displacementIntensity);

        vec3 displacement = vec3(
            cos(aAngle) * 0.2,
            sin(aAngle) * 0.2,
            1.0
        );
        displacement = normalize(displacement);
        displacement *= displacementIntensity;
        displacement *= 3.0;
        displacement *= aIntensity;
        
        newPosition += displacement;    
        
        // Final position
        vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        float pictureIntensity = texture(uPictureTexture, uv).r;

        // Varyings
        vColor = vec3(pow(pictureIntensity, 2.0));

        // Point size
        gl_PointSize = 0.15 * pictureIntensity * uResolution.y;
        gl_PointSize *= (1.0 / - viewPosition.z);
}
    `
    const particlesFragmentShader = `
    varying vec3 vColor;

    void main()
    {
        vec2 uv = gl_PointCoord;
        float distanceToCenter = length(uv - vec2(0.5));
        
        if(distanceToCenter > 0.5)
            discard;

        gl_FragColor = vec4(vColor, 1.0);

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
    }
    `
    let widthScreen = window.innerWidth
    let heightScreen = window.innerHeight

    const camera = useThree((state) => state.camera)
    const scene = useThree((state) => state.scene)

    const particlesGeometry = new THREE.PlaneGeometry(16, 9, 100, 100)
    let particlesMaterial
    let displacement

    useEffect(() => {
        const section = document.querySelector('.Project01')
        let pointerMoveHandler
        displacement = {}

        // Create 2D canvas
        displacement.canvas = document.createElement('canvas')
        displacement.canvas.width = 128
        displacement.canvas.height = 128
    
        // 2D canvas styling
        displacement.canvas.style.position = 'fixed'
        displacement.canvas.style.width = '256px'
        displacement.canvas.style.height = '256px'
        displacement.canvas.style.top = 0
        displacement.canvas.style.left = 0
        displacement.canvas.style.zIndex = 10
        displacement.canvas.style.display = 'none'
    
        // Append canvas to body
        document.body.append(displacement.canvas)
    
        // Context
        displacement.context = displacement.canvas.getContext('2d')
        displacement.context.fillRect(0, 0, displacement.canvas.width, displacement.canvas.height)
    
        // Glow image
        displacement.glowImage = new Image()
        displacement.glowImage.src = '/glow.png'
    
        // Texture
        displacement.texture = new THREE.CanvasTexture(displacement.canvas)
    
        // Interactive plane
        displacement.interactivePlane = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10),
        new THREE.MeshBasicMaterial({ color: 'red', side: THREE.DoubleSide })
        );
        displacement.interactivePlane.visible = false
        scene.add(displacement.interactivePlane)
    
        // Raycaster
        displacement.raycaster = new THREE.Raycaster()
    
        // Coordinates
        displacement.screenCursor = new THREE.Vector2(9999, 9999)
        displacement.canvasCursor = new THREE.Vector2(9999, 9999)
        displacement.canvasCursorPrevious = new THREE.Vector2(9999, 9999)
    
        // Event listener for mouse and touch
        pointerMoveHandler = (event) => {
        displacement.screenCursor.x = (event.clientX / widthScreen) * 2 - 1
        displacement.screenCursor.y = -(event.clientY / heightScreen) * 2 + 1
        }
    
        section.addEventListener('pointermove', pointerMoveHandler)

        const intensitiesArray = new Float32Array(particlesGeometry.attributes.position.count)
        const anglesArray = new Float32Array(particlesGeometry.attributes.position.count)

        for(let i = 0; i < particlesGeometry.attributes.position.count; i++)
        {
            intensitiesArray[i] = Math.random()
            anglesArray[i] = Math.random() * Math.PI * 2
        }

        particlesGeometry.setAttribute('aIntensity', new THREE.BufferAttribute(intensitiesArray, 1))
        particlesGeometry.setAttribute('aAngle', new THREE.BufferAttribute(anglesArray, 1))

        particlesMaterial = new THREE.ShaderMaterial({
            vertexShader: particlesVertexShader,
            fragmentShader: particlesFragmentShader,
            blending: THREE.AdditiveBlending,
            uniforms: {
                uResolution: { value: new THREE.Vector2(500, 500) },
                uPictureTexture: new THREE.Uniform(texture.texture),
                uDisplacementTexture: new THREE.Uniform(displacement.texture)
            },
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particles)

        return () => {
            section.removeEventListener('pointermove', pointerMoveHandler)
        }
    }, [scene])

      useFrame(() => {

        if (!displacement || !camera) return
    
        /**
         * Raycaster
         */

        displacement.raycaster.setFromCamera(displacement.screenCursor, camera)
        const intersections = displacement.raycaster.intersectObject(displacement.interactivePlane)
    
        if (intersections.length) {
          const uv = intersections[0].uv
    
          displacement.canvasCursor.x = uv.x * displacement.canvas.width
          displacement.canvasCursor.y = (1 - uv.y) * displacement.canvas.height
        }
    
        /**
         * Displacement
         */
    
        // Fade out
        displacement.context.globalCompositeOperation = 'source-over'
        displacement.context.globalAlpha = 0.02
        displacement.context.fillRect(0, 0, displacement.canvas.width, displacement.canvas.height)

        // Speed alpha
        const cursorDistance = displacement.canvasCursorPrevious.distanceTo(displacement.canvasCursor)
        displacement.canvasCursorPrevious.copy(displacement.canvasCursor)
        const alpha = Math.min(cursorDistance * 0.05, 1)
    
        // Draw glow
        const glowSize = displacement.canvas.width * 0.25
        displacement.context.globalCompositeOperation = 'lighten'
        displacement.context.globalAlpha = alpha;
        displacement.context.drawImage(
          displacement.glowImage,
          displacement.canvasCursor.x - glowSize * 0.5,
          displacement.canvasCursor.y - glowSize * 0.5,
          glowSize,
          glowSize
        );
    
        // Texture
        displacement.texture.needsUpdate = true
      });
    }
  
  export default ParticleSystem
  