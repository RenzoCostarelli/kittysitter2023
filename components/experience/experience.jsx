import { Center, Sparkles, OrbitControls, ScrollControls } from '@react-three/drei'
import Model from './_model'

export default function Experience() {

  return (
    <>
        {/* lights */}
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1 } />
        <ambientLight intensity={ 0.8 } />
        {/* model */}
        <Model />
    </>
  )
}