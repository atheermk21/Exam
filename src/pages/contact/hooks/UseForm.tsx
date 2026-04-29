import React from 'react'
import { useState } from 'react'
function UseForm() {
   const [form,setForm]=useState(
      {
        name:"",
        email:""
      }
    )
    const handleChange=(e:React.ChangeEvent <HTMLInputElement>)=>{
      setForm({...form,[e.target.name]:e.target.value})}
    
     const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      setForm({
        name:"",
        email:""
      })
     }
    return {form,handleChange,handleSubmit}
      
    
  }


export default UseForm

