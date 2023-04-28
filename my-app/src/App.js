import React from 'react';

import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://st2.depositphotos.com/4035913/6124/i/600/depositphotos_61243831-stock-photo-letter-s-logo.jpg" />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <main className='content'>
        <div>
          <img src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'/>
        </div>
        <div>
          avater+desc
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            posts
            <div>
              Post1
            </div>
            <div>
              Post2
            </div>
          </div>
        </div>
        Main content
      </main>
      <footer></footer>
    </div>
  );
}



export default App;
