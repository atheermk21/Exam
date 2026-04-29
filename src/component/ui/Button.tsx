import React,{type ReactNode } from "react"
import {Link,} from "react-router-dom"
interface ButtonProps{
    children:ReactNode,
    className:string,
    variant?:"primary"|"secondary",
    to?:string,
    onclick?:()=>void
}

function Button({children,className,variant="primary",to,onclick}:ButtonProps) {
    const styles={
        primary:"flex items-center justify-center text-black",
secondary:"rounded-xl flex items-center justify-center"    }
const base="text-black  py-4 px-5"
if(to){
    return(
        <Link className={`${base} ${className} ${styles[variant]}`}to={to}>{children}</Link>
    )
}
  return (
    <div>
        <button onClick={onclick} className={`${base} ${className} ${styles[variant]}`}>{children}</button>
    </div>
  )
}

export default Button
  
 