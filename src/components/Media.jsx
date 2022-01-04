import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'


const Media = props => {
    console.log(props.numeros);
    const {min,max} = props
        
    return (
        <Card blue title ="Media dos Números">
            <div className='Media'>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min+max)/2}</strong>
                </span>
            </div>
        </Card>
    )
}
const mapStateToProps = state =>{

    return {
        max: state.numeros.max,
        min: state.numeros.min,
    }

}
export default connect(mapStateToProps)(Media)