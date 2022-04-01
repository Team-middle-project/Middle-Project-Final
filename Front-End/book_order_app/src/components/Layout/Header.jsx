import React, {useState} from "react";
import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";
import { Button, Container } from 'react-bootstrap'
import SignUpModal  from "../Commons/SignUpModal";
import SignInModal  from "../Commons/SignInModal";
import AddProduct from "../Commons/AddProduct"
import "../fonts/font.css";
const Header = (props) => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [signInModalOn, setSignInModalOn] = useState(false);
  const [addProductOn, setAddProductOn] = useState(false);
  return (
    <>
      <SignUpModal show = {signUpModalOn} onHide={() => setSignUpModalOn(false)}/>
      <SignInModal show = {signInModalOn} onHide={() => setSignInModalOn(false)}/>
      <AddProduct show = {addProductOn} onHide={() => setAddProductOn(false)}/>
      <header className={classes.header}>
        <h1 className={classes.text}>안쓰는물건으로 화성갈끄야!</h1>
        <div className={classes.button}>
        <Button className={classes.b3}variant='addProduct' onClick={() => setAddProductOn(true)}>물품등록</Button>
        <Button className={classes.b1}variant='primary' onClick={() => setSignInModalOn(true)}>로그인</Button>
        <Button className={classes.b2}variant='secondary' onClick={() => setSignUpModalOn(true)}>회원가입</Button>
        </div>
      </header>
    </>
  );
};
export default Header;