import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Articles from '../components/Articles';

const Home = () => {

  const API_URL = "http://localhost:3000/articles";
  const [apiData, setApiData] = useState([]);
  
   const getApi = () => {
    axios.get(API_URL).then((res) => setApiData(res.data));
  };
  useEffect(() => getApi(), []);

  const getData = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:3001/users/sign_in", {
      headers: {
        
      }
    })
  }
  
  return (
    <div className='article-container'>
      <form onSubmit={getData}>
        <input placeholder='Auteur' />
        <textarea placeholder='Contenu'></textarea>
        <input type="submit" value="Envoyer" />
      </form>
      {
        apiData
        .map((article) => (
          <Articles article={article} key={article.id}/>
        ))
      }
    </div>
  );
};

export default Home;