
import React, { type ReactNode} from "react"
import Home from "../../pages/home/Home"

interface CardProps{
  children?:ReactNode,
  className?:string,
  id:number,
  title:string,
  description?:string
}
function Card({className,children,title,description}:CardProps) {

  return (
    <div className={`rounded-xl bg-red-500 h-full shadow-lg ${className}`||""}>{children}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card