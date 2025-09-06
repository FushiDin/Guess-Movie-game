import { useDispatch, useSelector } from 'react-redux'
import style from './FilmListPage.module.css'
import { useEffect } from 'react';
import { getFilmsList } from '../AddPage/service/service';
import { getListPageCreator } from '../../store/redusers/FilmsRedusers';
import { Link } from 'react-router-dom';

function FilmListPage() {
    const dispatch = useDispatch();

    const film = useSelector((state) =>
        state.FilmsReduserService.ListPage);

    useEffect(() => {
        getFilmsList().then((res) => {
            dispatch(getListPageCreator(res.data));
        });
    }, [dispatch]);

    return (
        <div className={style.List}>
            <h2>Список фильмов</h2>
            {film.map((film) => (

                <div key={film.id} className={style.filmItems}>
                    <div className={style.filmName}>
                        {film.name}
                    </div>

                    <div className={style.moreBut}>
                        <span><Link to={`/films/${film.id}`}>Подробнее</Link></span>
                    </div>
                </div>
            ))}

            <div className={style.but}>
                <Link to={'/game'}>Назад</Link>
            </div>
        </div>
    )
}

export default FilmListPage;