// import React from "react";
// import ReactDOM from "react-dom";

// function Greeting() {
//     return <h4>This is my first component.</h4>;
// }

// ReactDOM.render(<Greeting></Greeting>,document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";

// const Greeting = () => {
//     return (
//         <div>
//             <Person></Person>
//             <Message />
//         </div>
//     )
// }

// const Person = () => <h2>Diana</h2>;
// const Message = () => <p>This is my message</p>

// ReactDOM.render(<Greeting></Greeting>,document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const BookList = () => {
//     return (
//         <article>
//             <Image />
//             <Author />
//         </article>
//     )
// }

// const Image = () => {
//     return (
//         <img
//         src="https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"
//         />
//     );
// };

// const Author = () => <h2>James Clear</h2>;

// ReactDOM.createRoot(document.getElementById("root")).render(<BookList></BookList>);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const author = "Paulo Coelho";
// const title = "The Alchemist";
// const img = "https://m.media-amazon.com/images/I/51Yp4cPzh3L._SY346_.jpg";

// function BookList() {
//   return(
//     <section className="booklist">
//       <Book sale="20%"/>
//       <Book sale="10%" number={22}/>
//     </section>
//   )
// };

// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className="book">
//       <img src={img} />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       <p>Sale: {props.sale}</p>
//       <p>{props.number}</p>
//     </article>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<BookList></BookList>);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const firstBook = {
//   img: 'https://m.media-amazon.com/images/I/51fMaH1tRyL._SY346_.jpg',
//   title: "The Alchemist",
//   author: "Paulo Coelho"
// }

// const secondBook = {
//   img: 'https://m.media-amazon.com/images/I/51Yp4cPzh3L._SY346_.jpg',
//   title: "Ikigai",
//   author: "Hector Garcia"
// }

// function BookList() {
//   return(
//     <section>
//       <Book
//         img={firstBook.img}
//         title={firstBook.title}
//         author={firstBook.author}>
        
//         <p>Lorem</p>
//         </Book>
//       <Book
//         img={secondBook.img}
//         title={secondBook.title}
//         author={secondBook.author}
//       />
//     </section>
//   )
// }

// const Book = (props) => {
//   return(
//     <article className="book">
//       <img src={props.img} />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//       {props.children}
//     </article>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<BookList></BookList>);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const names = ["John", "Peter", "Lusy"];

// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

// function BookList() {
//   return <section>{newNames}</section>
// }



// ReactDOM.createRoot(document.getElementById("root")).render(<BookList></BookList>);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const books = [
//   {
//   id: 1,
//   img: 'https://m.media-amazon.com/images/I/51Yp4cPzh3L._SY346_.jpg',
//   title: "Ikigai",
//   author: "Hector Garcia"
// },
// {
//   id: 2,
//   img: 'https://m.media-amazon.com/images/I/51fMaH1tRyL._SY346_.jpg',
//   title: "The Alchemist",
//   author: "Paulo Coelho"
// }
// ]

// function BookList () {
//   return(
//     <section>
//       {books.map((book) => {
//         return <Book key={book.id} book={book} ></Book>
//       }
//       )}
//     </section>
//   )
// }

// const Book = (props) => {
//   const {img, title, author} = props.book;
//   return(
//     <article>
//       <img src={img} />
//       <h1>{title}</h1>
//       <h3>{author}</h3>
//     </article>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<BookList></BookList>);

/////////////

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
    {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/51Yp4cPzh3L._SY346_.jpg',
    title: "Ikigai",
    author: "Hector Garcia"
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/51fMaH1tRyL._SY346_.jpg',
    title: "The Alchemist",
    author: "Paulo Coelho"
  }
  ]
  
  function BookList () {
    return(
      <section>
        {books.map((book) => {
          return <Book key={book.id} book={book} ></Book>
        }
        )}
      </section>
    )
  }

  const clickHandler = (e) => {
    console.log(e);
    console.log("hello")
  }
  
  const complexExample = (author) => {
    console.log(author)
  }

  const Book = (props) => {
    const {img, title, author} = props.book;
    return(
      <article onMouseOver={() => console.log(title)}>
        <img src={img} />
        <h1 onClick={() => console.log(author)}>{title}</h1>
        <h3>{author}</h3>
        <button onClick={clickHandler}>example</button>
        <button onClick={() => complexExample(author)}>complex example</button>
      </article>
    )
  }





ReactDOM.createRoot(document.getElementById("root")).render(<BookList></BookList>);