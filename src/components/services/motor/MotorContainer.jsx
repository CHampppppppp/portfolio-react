import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { MotorModel } from "./MotorModel.jsx"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const MotorModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* 环境贴图 */}
        <Stage environment="city" intensity={2}>
          <MotorModel/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.6}/>
        <PerspectiveCamera  position={[-1,0,1.8]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  )
}

export default MotorModelContainer
