import React, {useRef, useEffect, useState} from 'react'
import {extend, useFrame} from '@react-three/fiber'
import {useGLTF, ContactShadows} from '@react-three/drei'
import * as THREE from 'three'

extend({THREE})

const material = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#bb86a1').convertSRGBToLinear(),
  roughness: 0,
  clearcoat: 1,
  clearcoatRoughness: 0,
  metalness: 1,
  side: THREE.DoubleSide
})

const Morph = (props) => {
  const ref = useRef()
  const gltf = useGLTF('/assets/models/Robot.gltf')
  const lookAtPos = new THREE.Vector3(0, 2, 0)
  const scene = gltf.scene || gltf.scenes[0]
  const clips = gltf.animations || []
  const validAnimations = ["robot_walking", "robot_no"]
  const mixer = new THREE.AnimationMixer( scene );
  const actions = {}

  useEffect(() => {
    // Setup animations
    for ( let i = 0; i < clips.length; i ++ ) {
      const clip = clips[ i ]
      actions[clip.name] = mixer.clipAction(clip)
      if (validAnimations.includes(clip.name.toLowerCase())){
        actions[clip.name].play()
      }
    }
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return
    mixer.update(delta)
    state.camera.lookAt(lookAtPos)
  })

  return (
  <group ref={ref} dispose={null}>
      <primitive object={scene} />
      <ContactShadows scale={10} blur={5} far={10} frames={1}/>
  </group>
  )
}

export {Morph}

useGLTF.preload('/assets/models/Robot.gltf')