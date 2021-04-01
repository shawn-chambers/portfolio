import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Content from "../Content/Content";
import Gradient from "../Gradient";
import axios from "axios";

const Resume = (props) => {
  const [page, setPage] = useState("");

  useEffect(() => {
    axios.get("/data/portfolio.json").then(({ data }) => {
      setPage(data[props.match.params.param]);
    });
  }, [props]);

  return (
    <>
      <Gradient />
      <SideBar />
      <Content content={page} />
    </>
  );
};

export default Resume;
