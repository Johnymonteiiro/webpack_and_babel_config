import { SetStateAction, useEffect, useState } from "react";
import axios from 'axios';
import { RepositoryItems } from "../RepositoryItems";
import './style.scss';

interface Repository {
    id:string,
    name:string,
    description:string,
    html_url:string,
    owner:{
      avatar_url: string,
      login:string,
    }
}

export const RepositoryList = () => {

  const [repositories, setRepositories] = useState<Repository[]>([])
  const [search, setSearch] = useState('')
  
  useEffect(()=>{
    axios.get(`https://api.github.com/users/${search}/repos`).then((resp) =>{
      console.log(resp.data)
      setRepositories(resp.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[search])
  
 function handleChange(e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }){
     e.preventDefault();
     setSearch(e.target.value)
 }

 console.log(search)
  return (
    <section>
    
      <h1>Repository List</h1>
      <input type="search" 
      onChange={handleChange} 
      value={search}
      placeholder="search user name..." />

      <ul>
        {
          repositories.map(repo=>{
            return(
              <RepositoryItems key={repo.id} repository={repo} />
            )
          })
        }
        
      </ul>
    </section>
  );
};
