const GET_FILMS = 'GET_FILM'
const ADD_FILMS = 'ADD_FILM'

let initialState = {
    ListPage: []
}



const FilmsReduser = (state = initialState, actian) => {
    switch (actian.type) {
        case GET_FILMS: {
            return {
                ...state,
                ListPage: actian.ListPage
            };
        }
        case ADD_FILMS: {
            const NewFilmsObject = {
                id: state.ListPage.length + 1,
                name: actian.newFilmsName,
                link: "./assets/Qwestion.jpg",
                desc: actian.newFilmsDesk
            }
        }
        default:
            return state;
    }
};

export const getListPageCreator = (ListPage) => ({ type: GET_FILMS, ListPage: ListPage })
export default FilmsReduser;