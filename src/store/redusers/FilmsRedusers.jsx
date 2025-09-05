import { postNewFilms } from "../../Pages/AddPage/service/service";

const GET_FILMS = 'GET_FILM'
const ADD_FILMS = 'ADD_FILM'

let initialState = {
    ListPage: []
}



const FilmsReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILMS: {
            return {
                ...state,
                ListPage: action.ListPage
            };
        }
        case ADD_FILMS: {
            const NewFilms = {
                id: state.ListPage.length + 1,
                name: action.newFilmsName,
                description: action.newFilmsDesc
            }
            postNewFilms(NewFilms);
            return {
                ...state,
                ListPage: [...state.ListPage, NewFilms]
            }
        }
        default:
            return state;

    }
};

export const getListPageCreator = (ListPage) => ({ type: GET_FILMS, ListPage: ListPage })
export const addNewFilms = (newFilmsName, newFilmsDesc) => ({ type: ADD_FILMS, newFilmsName: newFilmsName, newFilmsDesc: newFilmsDesc })
export default FilmsReduser;