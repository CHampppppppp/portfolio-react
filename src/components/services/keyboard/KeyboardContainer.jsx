import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { KeyboardModel } from "./KeyboardModel.jsx"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const KeyboardContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* 环境贴图 */}
        <Stage environment="sunset" intensity={0.1}>
          <KeyboardModel/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.6}/>
        <PerspectiveCamera  position={[-1,2,1.8]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  )
}

export default KeyboardContainer
