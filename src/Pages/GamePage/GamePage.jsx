import { Link } from 'react-router-dom';
import styles from './GamePage.module.css'

function GamePage() {
    return (
        <div className={styles.gamePage}>

            <div className={styles.header}>
                <Link to="/">Выйти</Link>
                <p>?</p>
                <Link to="/Add">Добавить фильм</Link>
            </div>

            <div className={styles.left}>
                <img src="assets/Qwestion.jpg" alt="OnePice" />
                <h4>One Pice</h4>
            </div>

            <div className={styles.right}>
                <p>Это аниме про парня в соломенной шляпе, который собирает команду друзей <br /> и путешествует по морям, чтобы найти величайшее сокровище мира.</p>
                <input type="text" />
                <button>Ответить</button>
            </div>

        </div>
    )
}

export default GamePage;