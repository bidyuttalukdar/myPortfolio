import React from "react"
import { PropagateLoader } from "react-spinners"

type DefaultLoaderProp ={
    color:string,
    text:string,
    size:number
}

const DefaultLoader:React.FC<DefaultLoaderProp> = ({color='blue', size=16}) =>{
    return (
        <>
            
            <PropagateLoader color={color} size={size}/>
        </>
    )
}

export default DefaultLoader