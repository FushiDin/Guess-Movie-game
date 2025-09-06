import { Link, useParams } from 'react-router-dom';
import styles from './FilmListPageDesc.module.css'
import { useSelector } from 'react-redux';

function FilmListPageDesc() {
    const { id } = useParams();

    const films = useSelector((state) =>
        state.FilmsReduserService.ListPage);

    let film;
    for (let f of films) {
        if (f.id === Number(id)) {
            film = f;
            break;
        }
    }
    return (
        <div className={styles.NameDesc}>
            <h1>{film.name}</h1>
            <p>{film.description}</p>
            <Link to={'/list'}>Назад</Link>
        </div>
        
    )
}

export default FilmListPageDesc;