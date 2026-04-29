import React from 'react'
import{Link} from "react-router-dom"
import { ROUTES } from '../../contanet/router'

function Footer() {
  return (
    <footer className='bg-black text-white py-6'>
    <div className='felx justyfy-center gap-6 text-lg'>
      <ul>
  <li><a href="https//facebook.com" target='_black' rel='noopener' className='hover:text-blue-500'>facebook</a></li>
  <li><a href="https//instagram.com" target='_black' rel='noopener' className='hover:text-blue-500'>instagram</a></li>
  <li><a href="https//whatsapp.com" target='_black' rel='noopener' className='hover:text-blue-500'>whatsapp</a></li></ul>
    </div></footer>
  )
}

export default Footer