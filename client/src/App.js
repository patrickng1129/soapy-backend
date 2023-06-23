import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/articles', {title, content, author});
      console.log(response.data)
    } catch(err) {
      console.error(err)
    }
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
