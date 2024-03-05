import { useMemo } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";
import { useState, useEffect } from "react";

// Bug possibly happens here during scrolling. It seems like this function gets triggered and re-generated the mesh every time the user scrolls.
export function MeshAnimation({ position, rotation, grid: { width, height, separation}
    , zOfXYT, colorOfXYZT, 
    anim: { init, update } 
}) {
    
    let t = init;
    // let t = 0

    
    let { positions, colors, normals } = useMemo(() => {
        let positions = [], colors = [], normals = []

        

        for (let yi = 0; yi < height; yi++) {
            for (let xi = 0; xi < width; xi++) {
                let x = separation * (xi - (width - 1.) / 2.)
                let y = separation * (yi - (height - 1.) / 2.)
                let z = zOfXYT(x, y, t)
                positions.push(x, y, z)

                let color = colorOfXYZT(x, y, z, t)
                colors.push(color.r, color.g, color.b)
                
                normals.push(0, 0, 1)
            }
        }

        return {
            positions: new Float32Array(positions),
            colors: new Float32Array(colors),
            normals: new Float32Array(normals)
        }

    }, [width, height, separation
        , zOfXYT, colorOfXYZT, t
    ])

    // index buffer
    let indices = useMemo(() => {
        let indices = []
        let i = 0
        for (let yi = 0; yi < height - 1; yi++) {
            for (let xi = 0; xi < width - 1; xi++) {
                indices.push(i, i + 1, i + width + 1)
                indices.push(i + width + 1, i + width, i)
                i++
            }
            i++
        }
        return new Uint16Array(indices)
    }, [width, height])

    useFrame(() => {
        t = update(t)

        const positions = geometry.attributes.position.array
        colors = geometry.attributes.color.array

        let i = 0
        for (let yi = 0; yi < height; yi++) {
            for (let xi = 0; xi < width; xi++) {
                positions[i + 2] = zOfXYT(positions[i], positions[i + 1], t)

                let c = colorOfXYZT(positions[i], positions[i + 1], positions[i + 2], t)
                colors[i] = c.r
                colors[i + 1] = c.g
                colors[i + 2] = c.b
                i += 3
            }
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;

    })

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
    geometry.setIndex(new THREE.BufferAttribute(indices, 1))

    return (
        <>
        <mesh position={position} rotation={rotation}  geometry={geometry}>
          <meshBasicMaterial vertexColors={THREE.VertexColors} wireframe/>
        </mesh>
        </>
    );
}