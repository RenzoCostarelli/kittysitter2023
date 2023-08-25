import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useEffect } from "react";
import useStore from '../lib/store';

export default function Layout({ children }) {

    const containerRef = useRef(null)
    const showModal = useStore(({ showForm }) => showForm)


    return (<>
      <LocomotiveScrollProvider
        options={
          {
            smooth: true
          }
        }
        containerRef={containerRef}
      >      
        <div data-scroll-container ref={containerRef}>
            {children}
        </div>
    </LocomotiveScrollProvider>
    </>
    );
}