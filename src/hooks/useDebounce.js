import React, { useEffect, useRef } from "react"
const UseDebounce = (callBackFunction, delayTime) => {
    const timeOutRef = useRef(null)

    //Cleaning the previous renders
    useEffect(() => {
        return () => {
            if (timeOutRef.current) {
                clearTimeout(timeOutRef.current)
            }
        }
    }, []);


    const debounceCallBack = (...params) =>{
        if(timeOutRef.current){
            clearTimeout(timeOutRef.current)
        }

        timeOutRef.current = setTimeout(()=>{
            callBackFunction(...params)
        },delayTime)
    }
 
    return debounceCallBack
}

export default UseDebounce