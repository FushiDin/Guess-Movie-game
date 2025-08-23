import { Link } from "react-router-dom";
import styles from "./Main.module.css";

function Main() {
    return (
        <div>
            <div className={styles.Center}>
                <Link to={'/game'}>Начать</Link>
            </div>
            <div className={styles.background}>
                <div className={styles.snake}>
                <p> START START START START START START START START START </p>
                <p> START START START START START START START START START</p>
                </div>                
            </div>

             <div className={styles.backgroundSecond}>
                <div className={styles.snakeSecond}>
                <p> START START START START START START START START START </p>
                <p> START START START START START START START START START</p>
                </div>                
            </div>
        </div>

    )
}

export default Main;