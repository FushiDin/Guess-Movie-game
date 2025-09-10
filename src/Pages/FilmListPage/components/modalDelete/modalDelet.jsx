import { useNavigate } from 'react-router-dom'
import styles from './modalDelet.module.css'
import { deleteTheFilm } from '../../FilmListPageDesc/service/service';

const ModalDelete  = ({name, id, visible, onCenel }) => {

    const navigate = useNavigate();

    const deleteFunc = () => {
        deleteTheFilm(id);
        onCenel();
        navigate('/');
    }

    return(
        <div className={visible ? styles.visible: styles.notVisible}>
            <h3>Удаление карточки{name}</h3>
            <p>Вы увереный удалить фильм {name} ?</p>
            <div>
                <button onClick={onCenel}>Отмена</button>
                <button onClick={deleteFunc}>Удалить</button>
            </div>
        </div>
    )

}

export default ModalDelete;