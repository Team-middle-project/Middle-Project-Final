import React, { useEffect, useState } from "react";
import Book from "./Book/Book";
import classes from "./BooksList.module.css";
import Card from "../../components/Commons/Card";

const BOOKS = [

  {
    id: "book1",
    name: "THE OLD MAN AND THE SEA",
    description:
      "A story of Santiago, an aging Cuban fisherman who struggles with a giant marlin far out in the Gulf Stream off the coast of Cuba",
    author: "Ernest Hemingway",
    price: 10.57,
    picture: "https://user-images.githubusercontent.com/71051838/160758463-976da87d-877e-435a-9831-d30ccd377678.png",
  },
  {
    id: "book2",
    name: "THE GREAT GATSBY",
    description:
      "Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    author: "F.Scott Fitzgerald",
    price: 12.97,
    picture: "https://user-images.githubusercontent.com/71051838/160758463-976da87d-877e-435a-9831-d30ccd377678.png",
  },
  {
    id: "book3",
    name: "THE LITTLE PRINCE",
    description:
      "A young prince who visits various planets in space, including Earth, and addresses themes of loneliness, friendship, love, and loss.",
    author: "Antoine de Saint-Exupery",
    price: 15.55,
    picture: "https://user-images.githubusercontent.com/71051838/160758463-976da87d-877e-435a-9831-d30ccd377678.png",
  },
  {
    id: "book4",
    name: "THE MYTH OF SISYPHUS",
    description:
      'Camus introduces his philosophy of the absurd. The absurd lies in the juxtaposition between the fundamental human need to attribute meaning to life and the "unreasonable silence" of the universe in response.',
    author: "Alber Camus",
    price: 16.92,
    picture: "https://user-images.githubusercontent.com/71051838/160758463-976da87d-877e-435a-9831-d30ccd377678.png",
  },
  {
    id: "book5",
    name: "THE MYTH OF SISYPHUS",
    description:
      'Camus introduces his philosophy of the absurd. The absurd lies in the juxtaposition between the fundamental human need to attribute meaning to life and the "unreasonable silence" of the universe in response.',
    author: "Alber Camus",
    price: 16.92,
    picture: "https://user-images.githubusercontent.com/71051838/160758463-976da87d-877e-435a-9831-d30ccd377678.png",
  },
];

const BASE_URL = 'http://localhost:8099/api/v1/product';

const BooksList = () => {
  const [books, setBooks] = useState(BOOKS);
  // console.log(books);

  // 1. DUMMY BOOKS ?????????
  //   const booksList = books.map((book) => (
  //     <li key={book.id}>
  //       <h3>{book.name}</h3>
  //       <div>{book.description}</div>
  //       <div>{book.author}</div>
  //     </li>
  //   ));

  // 2. ????????? <li> ??????????????? ??????
  // const booksList = books.map((book) => (
  //   <Book
  //     key={book.id}
  //     id={book.id}
  //     name={book.name}
  //     description={book.description}
  //     price={book.price}
  //   />
  // ));

  // 3. firebase??? ???????????? DUMMY DATA GET.
  useEffect(() => {
    console.log('??????');
    const fetchBooks = async () => {
      const response = await fetch(BASE_URL);

      console.log(response.ok);
      const responseData =  await response.json();
      console.log(responseData);

      const booksData = [];
      for (const key in responseData) {
        booksData.push({
          productId: key,
          uniqueId: responseData[key].uniqueId,
          productName: responseData[key].productName,
          productCost: responseData[key].productCost,
          productDate: responseData[key].productDate,
          productDescription : responseData[key].productDescription,
          productImage : responseData[key].productImage,
        });
      }

      setBooks(booksData);
    }

    fetchBooks().catch(error => {
      console.log(error);
    })
  }, []);

  const booksList = books.map((book) => (
    <Card>
      <Book
        key={book.productId}
        uniqueId={book.uniqueId}
        productName={book.productName}
        productCost={book.productCost}
        productDate={book.productDate}
        productDescription={book.productDescription}
        productImage={book.productImage}
      />
    </Card>
  ));

  return (
    <section className={classes.books}>
      {booksList}        
    </section>
  );
};

export default BooksList;
