import React from 'react'
import Card from './Card'

export default props => {
    return (
        <Card green title ="Soma dos Números">
            <div className='Soma'>
                <span>
                    <span>Resultado:</span>
                    <strong>10</strong>
                </span>
            </div>
        </Card>
    )
}