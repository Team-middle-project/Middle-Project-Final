import React, { useContext, useState } from "react";
import classes from './Book.module.css';
import CartContext from "../../../store/CartContext";
import Auction from "../../Commons/Auction"
import { Modal, Button } from 'react-bootstrap'
const Book = (props) => {
  const [auctionOn, setAuctionOn] = useState(false);
  const cartContext = useContext(CartContext);
  
  const addItemToCartHandler = amount => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return (
    <>
     
      <li className={classes.book}>
        <div className={classes.book__info}>
          {/* <h3>{props.name} - <span className={classes.author}>{props.author}</span></h3>
          <div className={classes.price}>${props.price}</div>
          <div className={classes.description}>{props.description}</div> */}
          <h3>{props.productId} - <span className={classes.author}>{props.productName}</span></h3>
          <div className={classes.description}>{props.productDescription}</div>
          <div className={classes.price}>{props.productCost}</div>
          <div className={classes.price}>{props.productDate}</div>
          {/* <img className={classes.picture} src={props.picture}></img> */}
          <img height="300"className = {classes.image} alt = "null image" src={props.productImage}></img>
          <Button className={classes.button} onClick={() => setAuctionOn(true)}>입찰</Button>
        </div>
        <Auction show={auctionOn} onHide={() => setAuctionOn(false)} />
      </li>
    </>
  );
};
export default Book;