only update this code with correct ans
import React from 'react'
import styles from "./Netflix.module.css";

const SeriesCard = ({ data }) => {
  //console.log(props);
  //destructuring
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  const Rating = rating >= 8.5 ? styles.super: styles.less;
  const btn_styl = {                      //Inline Css
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "green" : "red"}`,
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "3.2rem",
  }
  return (
    <li className={styles.card} >
      <div>
        <img src={`/images/${img_url}`} alt={name} width="40%" height="50%" />

      </div>
      <div className={styles["card-content"]}>
        <h2>Name:{name}</h2>
        <h3>Rating <span className={`${styles.rating} ${Rating}`}>{rating}</span></h3>
        <p>Summary:{description}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_styl}>Watch Now</button> </a>
      </div>
    </li>
  );
}
