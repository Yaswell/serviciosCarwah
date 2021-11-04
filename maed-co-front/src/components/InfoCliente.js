import React from 'react'

const InfoCliente = ({title,sugestion}) => {
    return (
        <div class="info-cliente">
            <h5>{title}</h5>
            <input type="text" readonly placeholder={sugestion} />
        </div>
    )
}

export default InfoCliente
