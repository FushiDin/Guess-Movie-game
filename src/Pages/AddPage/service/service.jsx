import { api } from "../../../shared/api"
import { BaseURL } from "../../../shared/const"

export const getFilmsList = () => {
    return api(BaseURL).get('/films')
}

export const postNewFilms = (payload) => {
    return api(BaseURL).post('/films', payload)
}