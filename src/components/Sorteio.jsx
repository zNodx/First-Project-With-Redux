import React from 'react'
import Card from './Card'

export default props => {
    return (
        <Card purple title ="Sorteio dos Números">
            <div className='Sorteio'>
                <span>
                    <span>Resultado:</span>
                    <strong>8</strong>
                </span>
            </div>
        </Card>
    )
}