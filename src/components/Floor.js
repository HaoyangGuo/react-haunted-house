import * as THREE from 'three';
import React from "react";
import { useTexture } from "@react-three/drei";
import grassColorTexture from "../textures/grass/color.jpg";
import grassAOTexture from "../textures/grass/ambientOcclusion.jpg";
import grassNormalTexture from "../textures/grass/normal.jpg";
import grassRoughnessTexture from "../textures/grass/roughness.jpg";

export default function Floor() {
    const grassTextures = useTexture({
        map: grassColorTexture,
        aoMap: grassAOTexture,
        normalMap: grassNormalTexture,
        roughnessMap: grassRoughnessTexture,
    })

    React.useLayoutEffect(() => {
        for (let texture in grassTextures) {
            grassTextures[texture].wrapS = THREE.RepeatWrapping
            grassTextures[texture].wrapT = THREE.RepeatWrapping
            grassTextures[texture].repeat = new THREE.Vector2(2, 2)
        }
    }, [grassTextures])

    return (
        <mesh receiveShadow rotation={[- Math.PI * 0.5, 0, 0]} position={[0, 0 ,0]}>
            <planeGeometry attach="geometry" args={[20, 20]} />
            <meshStandardMaterial attach="material" {...grassTextures} />
        </mesh>
    )
}