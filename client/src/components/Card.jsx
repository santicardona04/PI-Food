import React from "react";
import styles from './Card.module.css'
export default function Card ({title , img , typeDiets ,  id}) {
   
return (
    <div key = {id} className={styles.card}>
        <h3>{title}</h3>
        <img  className={styles.cardimg} src = { img? img:'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg' } alt ='img not found' width='200px'  height='250px'/>
        <h5 className={styles.type}>{typeDiets.map(t => t.name)}</h5> 
    </div>
)
}