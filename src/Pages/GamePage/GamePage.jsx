import { Link } from 'react-router-dom';
import styles from './GamePage.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function GamePage() {
    const [currentFilm, setCurrentFilm] = useState(null)
    const [userAnswer, setUserAnswer] = useState("")
    const [score, setScore] = useState(0)
    const [movieId, setMovieId] = useState(1)


    useEffect(() => {
        axios.get(`http://localhost:8080/films/${movieId}`)
            .then(res => setCurrentFilm(res.data))
            .catch(error => console.error(error));
    }, [movieId]);

    const SaveOnChange = (event) => {
        setUserAnswer(event.target.value);
    };

    const SaveAnswer = () => {
        if (userAnswer.toLowerCase() === currentFilm.name.toLowerCase()) {
            setScore(score + 5)
        } else {

        }
        setMovieId(movieId + 1)
    }

    const AgainFunc = () => {
        setScore(0);
        setMovieId(1)
        setUserAnswer("");
    }


    return (
        <div className={styles.gamePage}>

            <div className={styles.header}>
                <Link to="/">Выйти</Link>
                <p>{score}</p>
                <Link to="/Add">Добавить фильм</Link>
            </div>

            <div className={styles.left}>
                <img src="assets/Qwestion.jpg" alt="OnePice" />
                <h4>???</h4>
            </div>

            <div className={styles.right}>
                <p>{currentFilm?.description}</p>
                <input
                    type="text"
                    value={userAnswer}
                    onChange={SaveOnChange}
                />

                <button onClick={SaveAnswer}>Ответить</button>
                <button onClick={() => AgainFunc()}>Заново</button>
            </div>

            <div className={styles.ListBut}>
                <Link to={'/list'}>Список фильмов</Link>
            </div>

        </div>
    )
}

export default GamePage;