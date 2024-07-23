

function CircularText({children, side, fontSize, offset = 0}) {
    const CHARS = children.split('')
    const INNER_ANGLE = 360 / CHARS.length

    return (
        <>
        <span
            className="text-ring z-30"
            style={{
            '--total': CHARS.length,
            '--radius': side / Math.sin(INNER_ANGLE / (180 / Math.PI)) + offset,
            '--font-size': fontSize,
            }}
        >
            {CHARS.map((char, index) => (
            <span key={index} style={{'--index': index }}>
                {char}
            </span>
            ))}
        </span>

        <style>
            {`                
                .text-ring {
                position: relative;
                }
                .text-ring [style*=--index] {
                font-family: 'Charger', monospace;
                text-transform: uppercase;
                font-weight: bold;
                font-size: calc(var(--font-size, 2) * 1rem);
                position: absolute;
                top: 50%;
                left: 50%;
                transform:
                    translate(-50%, -50%)
                    rotate(calc(360deg / var(--total) * var(--index)))
                    translateY(calc(var(--radius, 5) * -1ch));
                }
            `}
        </style>
      </>
    )
  }
  
  export default CircularText
  