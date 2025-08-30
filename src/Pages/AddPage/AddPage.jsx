import { Link } from 'react-router-dom';
import styles from './AddPage.module.css'
import { useEffect } from 'react';
import { getFilmsList } from './service/service';

function AddPage() {
    // const List = useSelector(
    //     (state) => state.filmsReducerServis.ListPage
    // );

    useEffect(() => {
        getFilmsList()
    }, [])

    return (
        <div className={styles.ADD}>

            <div className={styles.left}>
                <img src="assets/Qwestion.jpg" alt="" />
            </div>

            <div className={styles.right}>
                <input type="text" placeholder='Названия Фильма...' />
                <input type="text" placeholder='Описания фильма...' />
            </div>

            <div className={styles.down}>
                <Link to={'/game'}>Назад</Link>
                <button>Добавить фильм</button>
            </div>

        </div>
    )
}

export default AddPage;