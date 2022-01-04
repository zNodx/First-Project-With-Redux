import{
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from './actionsType'

export function alterarNumeroMinimo(Min) {

    return {
        type: NUM_MIN_ALTERADO,
        payload: Min
    }

}

export function alterarNumeroMaximo(Max) {

    return {
        type: NUM_MAX_ALTERADO,
        payload: Max
    }

}