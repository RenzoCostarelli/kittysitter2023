import { Center, Sparkles, OrbitControls, ScrollControls } from '@react-three/drei'
import Model from './_model'

export default function Experience() {

  return (
    <>
        {/* lights */}
        <color attach="background" args={['lightpink']} />
        {/* <directionalLight castShadow position={ [ 0, 2, 3 ] } intensity={ 1.7 }/> */}
        {/* <ambientLight intensity={0.5} /> */}
        {/* model */}
        <Model />
    </>
  )
}