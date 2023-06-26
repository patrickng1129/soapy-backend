import React, { useState } from "react";
import axios from "axios";

const Mock = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/articles", {
        title,
        content,
        author,
      });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInvalid = (e) => {
    e.preventDefault();
    console.log("LMAO");
  };

  return (
    <div className="column is-6">
      <form onSubmit={handleSubmit}>
        <div className="block">
          <input
            className="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            onInvalid={handleInvalid}
            required
          />
        </div>
        <div className="block">
          <textarea
            className="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            onInvalid={handleInvalid}
            required
          />
        </div>
        <div className="block">
          <input
            className="input"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            onInvalid={handleInvalid}
            required
          />
        </div>
        <div className="block">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mock;
