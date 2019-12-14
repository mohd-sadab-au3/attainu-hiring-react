import * as actionTypes from '../actions/types';

const initialState = {

    details: [],
    person: [],
    loading: true
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_USER:
            return {
                ...state,
                details: [...state.details, action.payload],
                loading: false
            }
        case actionTypes.CONVERTED:
            return {
                ...state,
                details: state.details.map(elem => {
                    if (elem.id === action.payload) {
                        elem.converted = !elem.converted
                    }
                    return elem;
                }),
                loading: false

            }

        case actionTypes.SHOW_FEMALE:
            return {
                ...state,
                person: state.details.filter(elem => elem.gender === 'female'),
                loading: false

            }

        case actionTypes.SHOW_MALE:
            return {
                ...state,
                person: state.details.filter(elem => elem.gender === 'male'),
                loading: false

            }

        default:
            return state

    }



}
export default reducer;
