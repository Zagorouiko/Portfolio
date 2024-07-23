
function Loading() {

    return (
    <>
    <div class="container h-full w-full flex flex-col justify-center items-center">
        <div class="cube">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="text-xl mt-14">Loading</div>
    </div>
    
    <style>
            {`
                :root {
                    --size: 100px;
                    --color: rgb(0 0 0 / 0.38);
                    --glow-color: rgb(0 206 193);
                  
                    color-scheme: dark;
                  }
                                 
                  .container {
                    min-width: var(--size);
                    min-height: var(--size);
                    filter: drop-shadow(5px 5px 100px var(--glow-color));
                  
                    & .cube {
                      width: var(--size);
                      height: var(--size);
                      transform-style: preserve-3d;
                      animation: cube 2s infinite ease;
                  
                      & div {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        border: 2px solid #d9e0ff;
                        background: var(--color);
                  
                        &:nth-child(1) {
                          transform: translateZ(calc((var(--size) / 2) * -1)) rotateY(180deg);
                        }
                  
                        &:nth-child(2) {
                          transform: rotateY(-270deg) translateX(50%);
                          transform-origin: top right;
                        }
                  
                        &:nth-child(3) {
                          transform: rotateY(270deg) translateX(-50%);
                          transform-origin: center left;
                        }
                  
                        &:nth-child(4) {
                          transform: rotateX(90deg) translateY(-50%);
                          transform-origin: top center;
                        }
                  
                        &:nth-child(5) {
                          transform: rotateX(-90deg) translateY(50%);
                          transform-origin: bottom center;
                        }
                  
                        &:nth-child(6) {
                          transform: translateZ(calc(var(--size) / 2));
                        }
                      }
                    }
                  }
                  
                  @keyframes cube {
                    0% {
                      transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
                    }
                    50% {
                      transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
                    }
                    100% {
                      transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
                    }
                  }
            `}
    </style>
    </>
    )
  }
  
  export default Loading
  