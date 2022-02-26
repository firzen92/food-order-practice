import { useContext } from 'react';
import styles from './MealItemForm.module.css';

import Input from '../UI/Input';
import MealContext from '../context/meal-context';

const MealItemForm = props => {

    const ctx = useContext(MealContext);
    let count;


    const changeHandler = event => {
        count = +event.target.value;
    }

    const addToCart = (event) => {
        event.preventDefault();
        props.item.amount = count;
        ctx.updateCart(props.item);
    }

    return (
        <form className={styles.form} onSubmit={addToCart}>
            <Input label={'Amount'} onChange={changeHandler}/>
            <button type="submit">+ Add</button>
        </form>
    )
}

export default MealItemForm;