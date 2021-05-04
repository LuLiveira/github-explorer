

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useEffect, useState } from "react";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/LuLiveira/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
        .catch(error => console.error(error));
    }, [])


    return (
        <section className="repository-list">
            <h1>List de repositórios</h1>
            <ul>
                {
                    repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} /> )
                }
            </ul>
        </section>
    );
}