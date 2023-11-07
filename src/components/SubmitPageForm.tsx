import React, { useState } from "react";
import "./SubmitPageForm.css"

const SubmitPageForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const form = document.querySelector("form");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(form || undefined);
    const formDataArray = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(formDataArray); 

    const response = await fetch("/api/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formDataJsonString,
    });

    console.log("Received response:");
    console.log(response);
    try {
      const result = await response.json();
      console.log("JSON:");
      console.log(result);
    } catch (error) {
      const text = await response.text();
      console.log("Text:");
      console.log(text);
    }

    // if (result.error) {
    //   // There was an error inserting the record.
    // } else {
    //   // The record was inserted successfully.
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="titlefield"
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      
      <textarea
        className="contentfield"
        name="content"
        placeholder="Content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      
      <input
        className="authorfield"
        type="text"
        name="author"
        placeholder="Author"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
      />
      
      <button type="submit" className="booton">Submit</button>
    </form>
  );
};

export default SubmitPageForm;
