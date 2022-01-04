import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const soma = props => {

    const {min,max} = props

    return (
        <Card green title ="Soma dos Números">
            <div className='Soma'>
                <span>
                    <span>Resultado:</span>
                    <strong>{min+max}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
    
}

export default connect(mapStateToProps)(soma)