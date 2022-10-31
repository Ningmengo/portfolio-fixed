import React from "react";
import "./Space.css";
import Astronaut from "../component/asset/astronaut.png";

const Space = () => {
  return (
    <div className="wrapper">
      <div className="wrapper-header">
        <img alt="astronaut" src={Astronaut} className="astronaut" />
        <img
          alt="space"
          src="https://img.freepik.com/free-vector/space-background-with-planet-landscape_107791-6146.jpg?w=1800&t=st=1667112174~exp=1667112774~hmac=2d90dbc891d70c77eb4970102336cdbef412cd74c80aac89dc14233085102c71"
          className="space"
        />
      </div>
      <div className="title-EXPLORE">EXPLORE</div>
      <p>
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length: a paragraph is a group of at least five
        sentences, a paragraph is half a page long, etc. In reality, though, the
        unity and coherence of ideas among sentences is what constitutes a
        paragraph. A paragraph is defined as “a group of sentences or a single
        sentence that forms a unit” (Lunsford and Connors 116). Length and
        appearance do not determine whether a section in a paper is a paragraph.
        For instance, in some styles of writing, particularly journalistic
        styles, a paragraph can be just one sentence long. Ultimately, a
        paragraph is a sentence or group of sentences that support one main
        idea. In this handout, we will refer to this as the “controlling idea,”
        because it controls what happens in the rest of the paragraph.
      </p>
    </div>
  );
};

export default Space;
