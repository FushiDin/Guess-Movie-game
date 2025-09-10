import { api } from "../../../../shared/api"
import { BaseURL } from "../../../../shared/const"

export const getOneFilm = (id) => {
    return api(BaseURL).get(`films/${id}`)
}

export const putOneFilm = (id, payload) => {
    return api(BaseURL).put(`films/${id}`, payload)
}

export const deleteTheFilm = (id) => {
    return api(BaseURL).delete(`films/${id}`)
}