import { IReducerActions } from "./interface"

const initialState = {
    artists: []
}

export const reducer = (state = initialState, actions: IReducerActions) => {
    return Object.assign({}, state, {artists: actions.payload});
}