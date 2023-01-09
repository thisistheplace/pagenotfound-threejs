import React, {useRef, useState} from 'react'
import {extend} from '@react-three/fiber'
import * as THREE from 'three'

extend({THREE})

const Lights = (props) => {
  const ref = useRef()

  return (
    <>
      <hemisphereLight args={[0xffffff, 0x444444]} position={[0, 20, 0]}/>
      <directionalLight color={0xffffff} position={[0, 20, 10]}/>
    </>
  )
}

export {Lights}