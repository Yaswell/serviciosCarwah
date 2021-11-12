/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../assets/css/style.css'
import '../assets/sass/_variables.scss'
import nuevo from '../assets/img/btnAgregar.png'


const ButtonNew = ({text}) => {
    return <button className='butNext'><img src= {nuevo} />{text}</button>
}

export default ButtonNew