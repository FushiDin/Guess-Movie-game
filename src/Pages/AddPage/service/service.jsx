import { api } from "../../../shared/api"
import { BaseURL } from "../../../shared/const"

export const getFilmsList = () => {
    return api(BaseURL).get('/films')
}