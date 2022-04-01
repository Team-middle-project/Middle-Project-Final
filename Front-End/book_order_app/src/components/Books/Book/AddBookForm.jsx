import React, { useRef, useState } from 'react';
import Input from '../../Commons/Input';
import Button from '../../Commons/Button';
import classes from './AddBookForm.module.css';
import _uniqueId from 'lodash/uniqueId'

const AddBookForm = (props) => {
  const [id] = useState(_uniqueId('prefix-'));

  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const amountValue = inputRef.current.value;

    const amountValueToNumber = +amountValue;
    
    props.onAddToCart(amountValueToNumber);
  }

  return <form className={classes.form}>
    {/* <Input label={'Amount'} 
    ref={inputRef}
    input={{
        id: id,
        type: 'number',
        defaultValue: '1',
    }}/> */}
    <Button type="submit" onClick={submitHandler}>응찰 하러 가기</Button>
  </form>
};

export default AddBookForm;
