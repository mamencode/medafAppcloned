import React, { useEffect, useState } from "react";
import "./DesignScreen.css";
import { Link, useHistory } from "react-router-dom";

function DesignCate({ category, image }) {
  const history = useHistory();
  const [name, setName] = useState("");

  useEffect(() => {
    setName(category);
    console.log(name);
  }, []);

  const handleSubmit = () => {
    history.push({
      pathname: "/design/category",
      name
    });
  };
  return (
    <div
      onClick={() => {
        handleSubmit();
      }}
      // onClick={() => {
      //   handleSubmit();
      // }}
    >
      <Link
        to=""
        className="banner-module--banner--240AhjNm"
        translations="[object Map]"
        style={{ background: "rgb(52, 10, 94)" }}
      >
        {/* {category} */}
        <div className="banner-module--contentContainer--2eKnJaW5 col">
          <div
            className="banner-module--content--1o6hLXBj"
            style={{ color: "black" }}
          />
        </div>
        <div className="banner-module--imageContainer--3miU65ro">
          <img src={image} title="Tablet Smart Case" alt="collections" />
        </div>
      </Link>
    </div>
  );
}

export default DesignCate;
