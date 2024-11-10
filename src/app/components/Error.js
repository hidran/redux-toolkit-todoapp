import { useEffect, useState } from "react";

export const Error = ({children}) =>{
    const[hidden,setHidden] = useState(false);
    const [fadeout, setFadeout] = useState(false);
  useEffect(()=>{
     const timer = setTimeout(() => {
         setFadeout(true);
         setTimeout(() => {
            setHidden(true);
         }, 3000);
     }, 1000);
      return () => clearTimeout(timer)
  },[children]);
    const classes = `alert alert-danger text-center ${fadeout ? 'fade-out' : ''} ${hidden?'hidden':''}`;
    return (
        <div className={classes}>
            <h2>{children}</h2>
        </div>
    )
};