import React from "react";
import { Instance, Instances } from "@react-three/drei";

export default function Bush(props) {
	return (
		<Instances>
			<sphereGeometry geometry={[1, 16, 16]} attach="geometry" />
			<meshStandardMaterial attach="material" color="#89c854" />
			<Instance castShadow position={[0.8, 0.2, 2.2]} scale={[0.5, 0.5, 0.5]} />
			<Instance castShadow position={[1.4, 0.1, 2.1]} scale={[0.25, 0.25, 0.25]} />
			<Instance castShadow position={[-0.8, 0.1, 2.2]} scale={[0.4, 0.4, 0.4]} />
			<Instance castShadow position={[-1, 0.05, 2.6]} scale={[0.15, 0.15, 0.15]} />
		</Instances>
	);
}
