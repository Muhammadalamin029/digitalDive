import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      const api = `http://localhost:8000/blogs/${id}`;
      try {
        const response = await fetch(api);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log(blog);
      }
    };

    fetchBlog();
  }, []);

  return (
    <section className="section">
      <h1>{blog.title} </h1>
      <br />
      <br />
      <Markdown>{blog.content}</Markdown>
      <div className="comments"></div>
    </section>
  );
};

export default Blog;
