export default (state = { astros:[], banners: [], questions:[], reports: [], horoscopes: []  } , action) => {

    switch(action.type) {
        case 'FETCH_ASTRO':
            return {...state, astros: action.payload}
        case 'FETCH_BANNER':
            return {...state, banners: action.payload}
        case 'FETCH_QUESTION':
            return {...state, questions: action.payload}
        case 'FETCH_REPORT':
            return {...state, reports: action.payload}
        case 'FETCH_HOROSCOPE':
            return {...state, horoscopes: action.payload}
        default:
            return state
    }
}