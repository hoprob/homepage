import React from "react";

export function WorkExp({title, years, city, role, about}){
    return(
        <>
            <h5>{title}</h5>
            <p><strong>När:</strong> {years}</p>
            <p><strong>Plats:</strong> {city}</p>
            <p><strong>Roll:</strong> {role}</p>
            <p><strong>Om anställningen:</strong> {about}</p>
            <hr></hr>
        </>
    )
}

