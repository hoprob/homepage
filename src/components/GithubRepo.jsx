import {React, useEffect, useState} from "react";


export function GitHubRepo(){
    const [repo, setRepo] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(async() => {
        setLoading(true)
        await fetch("https://api.github.com/users/hoprob/repos")
        .then(response => response.json())
        .then(data => {
            setRepo(data);
            setLoading(false);
        }
        )
    }, [])

    return(
        <div>
            {loading?'Laddar data...' : ''}
            {repo.map((r) => {
                return (
                    <div className="repo">
                        <a href={r.html_url} target="_blank"><h4>{r.name}</h4><p>{r.description?r.description:'Utan beskrivning'}</p></a>
                    </div>
                )
            })}
        </div>
    )
}

