import {Instances, Instance } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react"

export default function Ghosts() {
    const ghostOne = useRef();
    const ghostTwo = useRef();
    const ghostThree = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime()
        const ghost1Angle = elapsedTime * 0.5
        ghostOne.current.position.x = Math.cos(ghost1Angle) * 5
        ghostOne.current.position.z = Math.sin(ghost1Angle) * 5
        ghostOne.current.position.y = Math.sin(elapsedTime * 5)
    
        const ghost2Angle = -elapsedTime * 0.32
        ghostTwo.current.position.x = Math.cos(ghost2Angle) * 6
        ghostTwo.current.position.z = Math.sin(ghost2Angle) * 6
        ghostTwo.current.position.y = Math.sin(elapsedTime * 6) + Math.sin(elapsedTime * 2.5)
    
        const ghost3Angle = -elapsedTime * 0.18
        ghostThree.current.position.x = Math.cos(ghost3Angle) * (8 + Math.sin(elapsedTime * 0.32))
        ghostThree.current.position.z = Math.sin(ghost3Angle) * (8 + Math.sin(elapsedTime * 0.5))
        ghostThree.current.position.y = Math.sin(elapsedTime * 6) + Math.sin(elapsedTime * 2.5)
      })

    return (
        <>
            <pointLight castShadow ref={ghostOne} args={["#ff00ff", 2, 3]}/>
            <pointLight castShadow ref={ghostTwo} args={["#00ffff", 2, 3]}/>
            <pointLight castShadow ref={ghostThree} args={["#ffff00", 2, 3]}/>
        </>
    )
}