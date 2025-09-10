import { Link, useParams } from 'react-router-dom';
import styles from './FilmListPageDesc.module.css'
import React, { useEffect, useState } from 'react';
import { getOneFilm, putOneFilm } from './service/service';
import ModalDelete from '../components/modalDelete/modalDelet';

function FilmListPageDesc() {
    const { id } = useParams();
    const [film, setFilm] = useState();
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        name: '',
        desc: ''
    });
    const [visible, setVisible] = useState(false)


    const nameRef = React.useRef();
    const descRef = React.useRef();

    useEffect(() => {
        if (id)
            getOneFilm(id).then((res) => setFilm(res.data))
    }, [id])


    const onChangeInputs = () => {
        setData({
            name: nameRef.current?.value || "",
            desc: descRef.current?.value || ""
        });
    };

    const putHandler = () => {
        try {
            putOneFilm(id, data).then((res) => {
                setFilm(res.data);
            });
            setOpen(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.wrapper}>
            {open ? (
                <>
                    <input type="text"
                        placeholder={film.name}
                        ref={nameRef}
                        onChange={onChangeInputs}
                    />


                    <input type="text"
                        placeholder={film.description}
                        ref={descRef}
                        onChange={onChangeInputs}
                    />
                    <div className={styles.buttons}>
                        <button onClick={() => setOpen(false)}>Отмена</button>
                        <button onClick={putHandler}>Сохранить</button>
                    </div>
                </>
            )
                :
                (

                    <div className={styles.NameDesc}>
                        {film ? <h1>{film.name}</h1>
                            : <p>Загрузка...</p>}
                        {film ? <p>{film.desc}</p>
                            : <p>Загрузка...</p>}
                        <Link to={'/list'}>Назад</Link>

                        <div className={styles.buttons}>
                            <button onClick={() => setVisible(false)}>Удалить</button>
                            <button onClick={() => setOpen(true)}>Редактировать</button>
                        </div>
                    </div>
                )
            }
            {film && (
                <ModalDelete
                    name={film.name}
                    visible={visible}
                    onCenel={() => setVisible(true)}
                    id={film.id}
                />
            )}
        </div>

    )
}

export default FilmListPageDesc;