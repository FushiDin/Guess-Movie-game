import { Link } from 'react-router-dom';
import styles from './AddPage.module.css'
import React, { useEffect, useState } from 'react';
import { getFilmsList } from './service/service';
import { useSelector } from 'react-redux';

function AddPage({ store }) {

    const [name, setName] = useState;
    const [desc, setDesc] = useState;

    const FilmList = useSelector(
        (state) => state.FilmsReduserService.ListPage
    );

    const useRefName = React.useRef()
    const useRefDescriotin = React.useRef()


    useEffect(() => {
        getFilmsList()
    }, [])

    return (
        <div className={styles.ADD}>

            <div className={styles.left}>
                <img src="assets/Qwestion.jpg" alt="" />
            </div>

            <div className={styles.right}>
                <input
                    type="text"
                    placeholder='Названия Фильма...'
                    ref={useRefName}
                />
                <input
                    type="text"
                    placeholder='Описания фильма...'
                    ref={useRefDescriotin}
                />
            </div>

            <div className={styles.down}>
                <Link to={'/game'}>Назад</Link>
                <button>Добавить фильм</button>
            </div>
        </div>
    )
}

export default AddPage;