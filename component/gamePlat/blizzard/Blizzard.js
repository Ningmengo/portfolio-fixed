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
    <div className="currentPage-Blizzard">
      <div className="contentPage-Blizzard">
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
          {post.map((item) => {
            const { id, title, url } = item;
            return (
              <div key={id} className="Video">
                <p id="title">{title}</p>
                <iframe
                  src={`https://www.youtube.com/embed/${url}`}
                  title="Embedded youtube"
                  className="EachVideo"
                  allowfullscreen="true"
                  showI
                  nfo="0"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blizzard;
