import React from 'react'


const infoPlanes = ({planes, value, onChange}) => {
    return (
        <div >
            {planes.map((option) =>(
                <div className= 'info-planes'>
                    <input type='radio' name= 'option' value= {value} onChange={onChange} /> {option.plan}
                    <h6>{option.precio} </h6>
                </div>
            ))}
            
            
        </div>
    )
}

export default infoPlanes
