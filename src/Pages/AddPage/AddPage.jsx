    import { Link } from 'react-router-dom';
    import styles from './AddPage.module.css'
    import React, { useEffect, useState } from 'react';
    import { getFilmsList } from './service/service';
    import { useDispatch, useSelector } from 'react-redux';
    import { getListPageCreator, addNewFilms } from '../../store/redusers/FilmsRedusers';

    function AddPage({ store }) {

        const [name, setName] = useState();
        const [desc, setDesc] = useState();

        const FilmList = useSelector(
            (state) => state.FilmsReduserService.ListPage
        );

        const dispatch = useDispatch()

        const useRefName = React.useRef()
        const useRefDescription = React.useRef()

        const onChangePostFilms = () => {
            setName(useRefName.current.value)
            setDesc(useRefDescription.current.value)
        }

        const addNewFilmsFunc = () => {
            dispatch(addNewFilms(name, desc))
            useRefName.current.value = '';
            useRefDescription.current.value = '';
        }

        useEffect(() => {
            getFilmsList().then((res) => {
                dispatch(getListPageCreator(res.data));
            })
        }, [dispatch])

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
                        onChange={onChangePostFilms}
                    />
                    <input
                        type="text"
                        placeholder='Описания фильма...'
                        ref={useRefDescription}
                        onChange={onChangePostFilms}
                    />
                </div>

                <div className={styles.down}>
                    <Link to={'/game'}>Назад</Link>
                    <button onClick={addNewFilmsFunc}>Добавить фильм</button>
                </div>
            </div>
        )
    }

    export default AddPage;