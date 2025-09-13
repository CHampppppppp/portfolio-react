import { MeshDistortMaterial, Sphere } from "@react-three/drei"

const Shape = () => {
  return (
    <>
      <directionalLight position={[1, 2, 3]}/>
      <ambientLight intensity={2} />
      <Sphere args={[1,100,200]} scale={2.4}>
        <MeshDistortMaterial
          color="#dd4c62"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
    </>
  )
}

export default Shape