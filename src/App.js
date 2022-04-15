import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Floor from "./components/Floor";
import House from "./components/House";
import Graves from "./components/Graves";
import Fog from "./components/Fog";
import Ghosts from "./components/Ghost";

export default function App() {
	return (
		<Canvas shadows camera={{ position: [4, 2, 5] }} color={"black"}>
            <color attach="background" args={["darkslateblue"]} />
			<Suspense fallback={null}>
				<ambientLight castShadow color={"#b9d5ff"} intensity={0.12} />
				<pointLight castShadow color={"#b9d5ff"} intensity={0.12} position={[4, 5, -2]} />
				<House />
				<Floor />
				<Graves />
                <Fog />
                <Ghosts />
				<OrbitControls
					maxPolarAngle={Math.PI * 0.49}
					minDistance={5}
					maxDistance={20}
					makeDefault
				/>
			</Suspense>
		</Canvas>
	);
}
