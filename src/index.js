import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
    {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/91vNnoglNOL._AC_UL254_SR254,254_.jpg",
    title: "Confidence Man: The Making of Donald Trump and the Breaking of America",
    rating: "38",
    price: "$22.40"    
    },

    {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/9193GbyIvxL._AC_UL254_SR254,254_.jpg",
    title: "I'm So Glad You Were Born: Celebrating Who You Are",
    rating: "99",
    price: "$14.99"    
    },

    {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/711cvCcahjL._AC_UL254_SR254,254_.jpg",
    title: "It Ends with Us: A Novel",
    rating: "171,465",
    price: "$9.99"    
    },  

    {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/61tqfa+xbWL._AC_UL254_SR254,254_.jpg",
    title: "Verity",
    rating: "166,586",
    price: "$11.26"    
    },

    {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL254_SR254,254_.jpg",
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    rating: "84,526",
    price: "$11.98"    
    },

    {
    id: 6,
    img: "https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS._AC_UL254_SR254,254_.jpg",
    title: "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
    rating: "56,205",
    price: "$11.40"    
    },

    {
    id: 7,
    img: "https://images-na.ssl-images-amazon.com/images/I/81YlQJgAZSL._AC_UL254_SR254,254_.jpg",
    title: "Live Wire: Long-Winded Short Stories",
    rating: "370",
    price: "$16.49"    
    },

    {
    id: 8,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL127_SR127,127_.jpg",
    title: "The 48 Laws of Power",
    rating: "52,754",
    price: "$11.60"    
    },

    {
    id: 9,
    img: "https://images-na.ssl-images-amazon.com/images/I/61xkvfPVupL._AC_UL127_SR127,127_.jpg",
    title: "November 9: A Novel",
    rating: "38,586",
    price: "$9.99"    
    },

    {
    id: 10,
    img: "https://images-na.ssl-images-amazon.com/images/I/611oufwi3YL._AC_UL127_SR127,127_.jpg",
    title: "The Return of the Gods",
    rating: "1,041",
    price: "$17.73"    
    },

    {
    id: 11,
    img: "https://images-na.ssl-images-amazon.com/images/I/61dZZdKRjYL._AC_UL127_SR127,127_.jpg",
    title: "If You Want Something Done: Leadership Lessons from Bold Women",
    rating: "1",
    price: "$18.89"    
    },

    {
    id: 12,
    img: "https://images-na.ssl-images-amazon.com/images/I/81dsTaJpn8L._AC_UL127_SR127,127_.jpg",
    title: "Our Missing Hearts: A Novel",
    rating: "12",
    price: "$20.30"    
    },

    {
    id: 13,
    img: "https://images-na.ssl-images-amazon.com/images/I/81XAArh4pbL._AC_UL127_SR127,127_.jpg",
    title: "Cooking from the Spirit: Easy, Delicious, and Joyful Plant-Based Inspirations",
    rating: "10",
    price: "$19.98"    
    },

    {
    id: 14,
    img: "https://images-na.ssl-images-amazon.com/images/I/61UyYQY7-ZL._AC_UL127_SR127,127_.jpg",
    title: "The Love Prescription: Seven Days to More Intimacy, Connection, and Joy (The Seven Days Series)",
    rating: "9",
    price: "$19.61"    
    },

    {
    id: 15,
    img: "https://images-na.ssl-images-amazon.com/images/I/71RIWM0sv6L._AC_UL254_SR254,254_.jpg",
    title: "Good Inside: A Guide to Becoming the Parent You Want to Be",
    rating: "192",
    price: "$12.99"    
    },

    {
    id: 16,
    img: "https://images-na.ssl-images-amazon.com/images/I/61Bdp7XZhDL._AC_UL254_SR254,254_.jpg",
    title: "The Silent Patient",
    rating: "135,824",
    price: "$11.91"    
    },

    {
    id: 17,
    img: "https://images-na.ssl-images-amazon.com/images/I/91emRUWl2-L._AC_UL127_SR127,127_.jpg",
    title: "The Whalebone Theatre: A novel",
    rating: "5",
    price: "$24.50"    
    },

    {
    id: 18,
    img: "https://images-na.ssl-images-amazon.com/images/I/9136kXA1i-L._AC_UL127_SR127,127_.jpg",
    title: "Dreamland: A Novel",
    rating: "2,443",
    price: "$16.40"    
    }
]

function BookList() {
    return (
        <section className="main">
            {books.map((item) => {
                return <Book key={item.id} item={item}></Book>
            })}
        </section>
    )
}

const Book = (props) => {
    const {img, title, rating, price} = props.item;
    return(
        <article className="book">
            <img src={img} alt="bookcover"/>
            <h2>{title}</h2>
            <p>{rating}</p>
            <h3>{price}</h3>
        </article>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);