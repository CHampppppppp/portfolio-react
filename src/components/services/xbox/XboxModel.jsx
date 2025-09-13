
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function XboxModel(props) {
  const { nodes, materials } = useGLTF('/xbox_inalambric_controller_white.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.material} position={[0, -0.25, 0.293]} rotation={[0, -Math.PI / 2, 0]} scale={0.053} />
    </group>
  )
}

useGLTF.preload('/xbox_inalambric_controller_white.glb')
