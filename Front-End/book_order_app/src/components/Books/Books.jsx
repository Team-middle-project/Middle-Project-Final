import React from "react";
import BooksList from "./BooksList";
import classes from "./BooksList.module.css";


const Books = () => {
  return (
    <>
    <section className={classes.books}>
      <BooksList />
      {/* <BooksList />
      <BooksList />
      <BooksList /> */}
    </section>
    </>
  );
};

export default Books;
