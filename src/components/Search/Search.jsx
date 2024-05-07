import React, { useState, useRef } from "react";
import GetBlogItem from "../../Services/BlogServices";
import BlogItem from "../BlogItem/BlogItem";

const Search = () => {
  const [blogItemState, setBlogItemState] = useState({ title: "", body: "" });
  const idVal = useRef();

  const handleClick = () => {
    GetBlogItem(idVal.current.value).then((data) => {
      const item = { title: data.title, body: data.body };
      setBlogItemState(item);
    });
  };

  return (
    <>
      <input type="text" ref={idVal} />
      <button onClick={handleClick}>Search</button>
      <BlogItem item={blogItemState} />
    </>
  );
};

export default Search;
