import react from "react";


const usePrevious =(value)=> {
        const ref = react.useRef();
        react.useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }


export default usePrevious