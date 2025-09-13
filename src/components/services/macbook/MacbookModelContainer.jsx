import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { MacbookModel } from "./MacbookModel.jsx"
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"

const MacbookModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* 环境贴图 */}
        <Stage environment="night" intensity={0.3}>
          <MacbookModel/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.6}/>
        <PerspectiveCamera  position={[-1,0,1.8]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  )
}

export default MacbookModelContainer