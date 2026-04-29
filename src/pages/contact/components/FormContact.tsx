import React from 'react'
import UseForm from '../hooks/UseForm'
import Button from '../../../component/ui/Button'
function FormContact() {
  const {form,handleChange,handleSubmit}= UseForm()
  return (
    <div>
      <form  className ="flex justify-center items-center gap-5 py-3 px-4 mx-auto mt-10 p-6" action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={form.name} name='name' placeholder='enter your name' required />
        <input type="text" onChange={handleChange} value={form.email} name="email" placeholder='enter your email' />
        <Button  variant="secondary" className="bg-blue-200">submit</Button>
      </form>
    </div>
  )
}

export default FormContact