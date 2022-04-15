import React from "react";
import { Instance, Instances } from "@react-three/drei";

export default function Graves(props) {
	const GravesMeshes = [];
	for (let i = 0; i < 50; i++) {
		const angle = Math.random() * Math.PI * 2;
		const radius = 3 + Math.random() * 6;
		const x = Math.cos(angle) * radius;
		const z = Math.sin(angle) * radius;

		const rotationY = (Math.random() - 0.5) * 0.4;
		const rotationZ = (Math.random() - 0.5) * 0.4;

		GravesMeshes.push(
			<Instance
				key={i}
				position={[x, 0, z]}
				rotation={[0, rotationY, rotationZ]}
			/>
		);
	}
	return (
		<Instances castShadow receiveShadow>
			<boxGeometry attach="geometry" args={[0.6, 0.8, 0.2]} {...props} />
			<meshStandardMaterial attach="material" color="#b2b6b1" />
            {GravesMeshes}
		</Instances>
	);
}
