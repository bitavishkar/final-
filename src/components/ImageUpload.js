import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
  const api = "http://localhost:8000/api/posts/";
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);

    try {
      const response = await axios.post(api, formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 200,
          }}
        >
          <label htmlFor="title-input"></label>
          <input
            placeholder="ENTER THE TITLE"
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label style={{}} htmlFor="file-input"></label>

          <input
            id="image"
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            onChange={handleFileChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button style={{ width: 200, height: 20 }} type="submit">
            DeBlurr
          </button>
        </div>
      </form>
    </>
  );
};

export default ImageUpload;
