import React from 'react'

const InfoCliente = ({title,sugestion, value, onChange}) => {
    return (
        <div className="info-cliente">
            <h5>{title}</h5>
            <input type="text"  placeholder={sugestion} value= {value} onChange={onChange} />
        </div>
    )
}

export default InfoCliente
