import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    let form = document.getElementById('form');
      form.addEventListener('submit', (event) => {
        event.preventDefault();

        let username = document.getElementById('username').value;
        searchUsers(username)
      });
    return () => {
      console.log("уборка")
    }
  }, []);

  function searchUsers(username) {
    fetch("https://api.github.com/search/users?q=" + username + "+in:user&per_page=100")
      .then(response => response.json())
      .then(data => setUser(data.items))
  }

  console.log(user)

  if (user) {
    return (
      <div className="page">
        <h1 className="title">User searcher</h1>
        <form className="search-form" id='form' autoComplete='off'>
          <input type="text" id="username" className="search-username" placeholder="UserName" />
          <button className="search-button-submit">Поиск</button>
        </form>
        <div id="result">
          {user.map(item => (
            <div className="user-block">
              <p>{item.login}</p>
              <a href={item.html_url}><img className="result-image" src={item.avatar_url} alt='imagze' /></a>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="page">
      <h1 className="title">User searcher</h1>
      <form className="search-form" id='form' autoComplete='off'>
        <input type="text" id="username" className="search-username" placeholder="UserName" />
        <button className="search-button-submit">Поиск</button>
      </form>
      <div id="result">
      </div>
    </div>
  )
}

export default App;
