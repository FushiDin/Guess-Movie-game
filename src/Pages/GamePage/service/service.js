import { api } from "../../../shared/api"
import { BaseURL } from "../../../shared/const"

export const getIdFilm = (id) => {
    return api(BaseURL).get(`films/${id}`)
}