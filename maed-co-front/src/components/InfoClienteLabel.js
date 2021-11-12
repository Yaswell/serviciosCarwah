import React from 'react'

const InfoClienteLabel = ({title,sugestion, value, onChange}) => {
    return (
        <div className="info-cliente-label">
            <h5>{title}</h5>
            <label value= {value} onChange={onChange} >{sugestion} </label>
        </div>
    )
}

export default InfoClienteLabel
