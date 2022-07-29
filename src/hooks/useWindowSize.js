import { useState, useEffect } from "react";


const useWindowSize = () => {
   const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
   });

     useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        
        handleResize();  /* It will only run once bcos the useEffect depency is set to an an empty array   */

        window.addEventListener('resize', handleResize);

        /* A CleanUp function to prevent a memory leak after the  the resize event has been fired */
        const cleanUp = () => {
            window.removeEventListener('resize', handleResize);
        }

        return cleanUp
     }, [])

     return windowSize;
}

export default useWindowSize