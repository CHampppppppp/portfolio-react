

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function KeyboardModel(props) {
  const { nodes, materials } = useGLTF('/keyboardModel.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Big_Buttons} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Chassis} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Small_Buttons} />
      </group>
    </group>
  )
}

useGLTF.preload('/keyboardModel.glb')
