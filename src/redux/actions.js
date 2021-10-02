import axios from 'axios'
import { ASTRO_URL, BANNER_URL, QUESTION_URL, REPORT_URL, HOROSCOPE_URL, CUSTOMER_URL } from '../constants'

const fetchAstro = astro => ({
    type: 'FETCH_ASTRO',
    payload: astro
})

const fetchBanner = banner => ({
    type: 'FETCH_BANNER',
    payload: banner
})

const fetchQuestion = question => ({
    type: 'FETCH_QUESTION',
    payload: question
})

const fetchReport = report => ({
    type: 'FETCH_REPORT',
    payload: report
})

const fetchHoroscope = horoscope => ({
    type: 'FETCH_HOROSCOPE',
    payload: horoscope
})

const fetchCustomer = customer => ({
    type: 'FETCH_CUSTOMER',
    payload: customer
})

export const fetchData =  () => {
    return async dispatch => {
        try {
            axios.all([
                axios.get(ASTRO_URL), 
                axios.get(BANNER_URL),
                axios.get(QUESTION_URL), 
                axios.get(REPORT_URL), 
                axios.get(HOROSCOPE_URL),
                axios.get(CUSTOMER_URL)
            ]).then(axios.spread((...response) => {
                dispatch(fetchAstro(response[0].data.data))
                dispatch(fetchBanner(response[1].data.data))
                dispatch(fetchQuestion(response[2].data.data))
                dispatch(fetchReport(response[3].data.data))
                dispatch(fetchHoroscope(response[4].data.data))
                dispatch(fetchCustomer(response[5].data.data))
              }))
        }
        catch(e){
            console.log(e)
        }
    }
}