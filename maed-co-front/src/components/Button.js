import React from 'react'
import '../assets/variables/variables.css'
import '../assets/css/style.css'

const onClick = (e) =>{

}

const Button = ({text}) => {
    return <button onClick={onClick} className='btn'>{text}</button>
}

export default Button
