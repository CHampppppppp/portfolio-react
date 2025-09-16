import { useGLTF } from '@react-three/drei'

export function MotorModel(props) {
  const { nodes, materials } = useGLTF('/aprilia_rs660_light.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-67.159, 0, 167.173]} rotation={[-Math.PI, 0, -Math.PI]} scale={210.943}>
          <mesh geometry={nodes.b_tyre014001_Rubber_Black_0.geometry} material={materials.Rubber_Black} />
          <mesh geometry={nodes.b_tyre014001_dummy_material_0003_0.geometry} material={materials['dummy_material_0.003']} />
          <mesh geometry={nodes.b_tyre014001_dummy_material_0032_0.geometry} material={materials['dummy_material_0.032']} />
        </group>
        <group position={[-67.159, 0, 167.173]} rotation={[-Math.PI, 0, -Math.PI]} scale={210.943}>
          <mesh geometry={nodes.chassis024001_mat_mechanics024_001001_0.geometry} material={materials['mat_mechanics024_001.001']} />
          <mesh geometry={nodes.chassis024001_mat_mechanics024_001001_0_1.geometry} material={materials['mat_mechanics024_001.001']} />
          <mesh geometry={nodes.chassis024001_mat_gear024001_0.geometry} material={materials['mat_gear024.001']} />
          <mesh geometry={nodes.chassis024001_mat_glass024_001001_0.geometry} material={materials['mat_glass024_001.001']} />
          <mesh geometry={nodes.chassis024001_mat_light024001_0.geometry} material={materials['mat_light024.001']} />
          <mesh geometry={nodes.chassis024001_mat_livery_0_024_001001_0.geometry} material={materials['mat_livery_0_024_001.001']} />
          <mesh geometry={nodes.chassis024001_mat_chain_1_002001_0.geometry} material={materials['mat_chain_1_002.001']} />
          <mesh geometry={nodes.chassis024001_BASE_glass_edge001_0.geometry} material={materials['BASE_glass_edge.001']} />
          <mesh geometry={nodes.chassis024001_mat_gauge024001_0.geometry} material={materials['mat_gauge024.001']} />
          <mesh geometry={nodes.chassis024001_mat_cockpit024_001001_0.geometry} material={materials['mat_cockpit024_001.001']} />
        </group>
        <group position={[-67.159, 0, 167.173]} rotation={[-Math.PI, 0, -Math.PI]} scale={210.943}>
          <mesh geometry={nodes.f_tyre006001_Rubber_Black_0.geometry} material={materials.Rubber_Black} />
          <mesh geometry={nodes.f_tyre006001_dummy_material_0003_0.geometry} material={materials['dummy_material_0.003']} />
          <mesh geometry={nodes.f_tyre006001_dummy_material_0032_0.geometry} material={materials['dummy_material_0.032']} />
        </group>
        <mesh geometry={nodes.exmanifold024001_dummy_material_0_0.geometry} material={materials.dummy_material_0} position={[-67.159, 0, 167.173]} rotation={[-Math.PI, 0, -Math.PI]} scale={210.943} />
        <mesh geometry={nodes.muffler024001_dummy_material_0001_0.geometry} material={materials['dummy_material_0.001']} position={[-67.159, 0, 167.173]} rotation={[-Math.PI, 0, -Math.PI]} scale={210.943} />
      </group>
    </group>
  )
}

useGLTF.preload('/aprilia_rs660_light.glb')
