import React from "react";

export default function Card ({title , img , typeDiets ,  id}) {
   
return (
    <div key = {id}>
        <h3>{title}</h3>
        <img src = { img? img:'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg' } alt ='img not found' width='200px'  height='250px'/>
        <h5>{typeDiets.map(t => t.name)}</h5> 
    </div>
)
}