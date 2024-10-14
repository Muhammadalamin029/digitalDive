import React, { useContext } from "react";
import Markdown from "react-markdown";
import { BlogContext } from "../context/BlogContextProvider";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/Firebase";

const ViewBlog = () => {
  const submitRef = useContext(BlogContext);

  const blogDataRef = collection(db, "blogs");

  const submitData = async (data) => {
    await addDoc(blogDataRef, data);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blogs");
    submitData(submitRef.current);
  };

  return (
    <section className="section">
      <h1>View Blog</h1>
      <p>Here is a preview of your blog before publish.</p>
      <h3>Blog title</h3>
      <p>{submitRef.current.title}</p>
      <h3>Blog category</h3>
      <p>{submitRef.current.category}</p>
      <h3>Blog content</h3>
      <Markdown>{submitRef.current.content}</Markdown>
      <button onClick={handleClick} className="btn button">
        PUBLISH
      </button>
    </section>
  );
};

export default ViewBlog;
