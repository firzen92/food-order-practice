import React from 'react';

import styles from './Input.module.css';

const Input = props => {
    return (
        <div className={styles.input}>
            <label>{props.label}</label>
            <input type="number" onChange={props.onChange}/>
        </div>
    )
}

export default Input;