import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 CAVVEX All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
