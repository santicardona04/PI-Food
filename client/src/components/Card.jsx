import React from "react";

export default function Card ({title , img , typeDiet}) {
return (
    <div>
        <h3>{title}</h3>
        <img src = {img} alt ='img not found' width='200px'  height='250px'/>
        <h5>{typeDiet.map(t => t.name)}</h5>
    </div>
)
}