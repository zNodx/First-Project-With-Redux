import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'
 
const intervalo = props => {

    const {min,max} = props
    
    return (
        <Card red title ="Intervalo dos Números">
            <div className='intervalo'>
         
            <span>
                <strong>Mínimo:</strong>
                <input type="number" value={min} 
                    onChange={e => props.alterarMin(+e.target.value)}
                />
            </span>

            <span>
                <strong>Máximo:</strong>
                <input type="number" value={max} 
                    onChange={e => props.alterarMax(+e.target.value)}
                />
            </span>

            </div>

        </Card>
    )
}

const mapStateToProps = state =>{
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const mapDispatchToProp = dispatch => {

    return {
        alterarMin(Min){
            const action = alterarNumeroMinimo(Min)
        dispatch(action)
        },
        alterarMax(Max){
            const action = alterarNumeroMaximo(Max)
        dispatch(action)
        }
    }


}

export default connect(
    mapStateToProps,
    mapDispatchToProp    
    )(intervalo)