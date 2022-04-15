import React from "react";
import { useTexture } from "@react-three/drei";
import Bushes from "./Bushes";
import wallColorTexture from "../textures/bricks/color.jpg";
import wallNormalTexture from "../textures/bricks/normal.jpg";
import wallRoughnessTexture from "../textures/bricks/roughness.jpg";
import wallAOTexture from "../textures/bricks/ambientOcclusion.jpg";
import doorColorTexture from "../textures/door/color.jpg";
import doorAlphaTexture from "../textures/door/alpha.jpg";
import doorAmbientOcclusionTexture from "../textures/door/ambientOcclusion.jpg";
import doorHeightTexture from "../textures/door/height.jpg";
import doorNormalTexture from "../textures/door/normal.jpg";
import doorMetalnessTexture from "../textures/door/metalness.jpg";
import doorRoughnessTexture from "../textures/door/roughness.jpg";

export default function House() {
	const wallTextures = useTexture({
		map: wallColorTexture,
		aoMao: wallAOTexture,
		normalMap: wallNormalTexture,
		roughnessMap: wallRoughnessTexture,
	});

	const doorTextures = useTexture({
		map: doorColorTexture,
		alphaMap: doorAlphaTexture,
		aoMap: doorAmbientOcclusionTexture,
		heightMap: doorHeightTexture,
		normalMap: doorNormalTexture,
		metalnessMap: doorMetalnessTexture,
		roughnessMap: doorRoughnessTexture,
	});

	return (
		<group>
			<pointLight
               
				color={"#ff7d46"}
				intensity={0.4}
				position={[0, 2.5, 3]}
			/>
			<mesh castShadow receiveShadow position={[0, 1.25, 0]}>
				<boxGeometry args={[4, 2.5, 4]} />
				<meshStandardMaterial attach="material" {...wallTextures} />
			</mesh>
			<mesh castShadow position={[0, 3, 0]} rotation={[0, Math.PI * 0.25, 0]}>
				<coneGeometry args={[3.5, 1, 4]} />
				<meshStandardMaterial attach="material" color={"brown"}/>
			</mesh>
			<mesh receiveShadow position={[0, 1, 2.01]}>
				<planeGeometry attach="geometry" args={[2.2, 2.2, 100, 100]} />
				<meshStandardMaterial {...doorTextures} transparent displacementScale={0.15} attach="material" />
			</mesh>
			<Bushes />
		</group>
	);
}
