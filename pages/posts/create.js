import React, { useState } from "react";
import Layout from "../../components/layout";
import Router from "next/router";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (title && content) {
      // send a request to the server.
      try {
        const body = { title, content, published: false };
        await fetch(`/api/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        await Router.push("/posts/drafts");
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("All fields are required");
      return;
    }
  };

  return (
    <Layout>
      <main class="pt-[5.5rem] lg:pt-24">
        <h1>Create a Post</h1>
        <form onSubmit={handleSubmit}>
          {error ? <div className=" error form-group">{error}</div> : null}
          {message ? <div className="message form-group">{message}</div> : null}
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              cols={50}
              name="content"
              placeholder="Content"
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit">Add Post</button>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default CreatePost;
