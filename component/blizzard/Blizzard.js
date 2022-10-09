import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Blizzard.css";
const Blizzard = () => {
  const baseURL =
    "https://my-json-server.typicode.com/Ningmengo/FakeJsonServer/posts";

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log(post);
  return (
    <div className="currentPage">
      <div className="contentPage">
        <img
          className="Icon-Blizzard"
          alt="Icon of Blizzard"
          src="https://external-preview.redd.it/wFOBEiVQtek76NU2o8drpwweHr5H9cS8Osch9vC-yF8.png?auto=webp&s=eb0d28c5dce94d7ec322fa2a5cc34726423fe4dd"
        />
        <img
          className="Icon-ow2"
          alt="Icon of OW2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Overwatch_2_logo.svg/2560px-Overwatch_2_logo.svg.png "
        />

        <div className="content">
          {post.map((item, index) => {
            const { id, title, url } = item;
            return (
              <div key={index} className="Video">
                <p>{id}</p>
                <p>{title}</p>
                <p>{url}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blizzard;
