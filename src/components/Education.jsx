import React from "react";


export function Education({title, years, school, graduation, about}){
    return(
        <>
            <h5>{title}</h5>
            <p><strong>När:</strong> {years}</p>
            <p><strong>Plats:</strong> {school}</p>
            <p><strong>Utbildningsform:</strong> {graduation}</p>
            <p><strong>Om utbildningen:</strong> {about}</p>
            <hr></hr>
            </>
    )
}

