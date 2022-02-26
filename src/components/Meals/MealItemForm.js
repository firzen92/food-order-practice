import styles from './MealItemForm.module.css';

import Input from '../UI/Input';

const MealItemForm = props => {

    const addToCart = (event) => {
        event.preventDefault();
    }

    return (
        <form className={styles.form} onSubmit={addToCart}>
            <Input label={'Amount'}/>
            <button type="submit">+ Add</button>
        </form>
    )
}

export default MealItemForm;