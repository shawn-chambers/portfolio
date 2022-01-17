import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Content from "../Content/Content";
import Gradient from "../Gradient";
import axios from "axios";

const Resume = (props) => {
  const [page, setPage] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://shawnipedia.s3-us-west-1.amazonaws.com/shawnipedia-min.json"
      )
      .then(({ data }) => {
        setPage(data[props.match.params.param]);
      });
  }, [props]);

  return (
    <>
      <Gradient />
      <SideBar />
      {page && <Content content={page} />}
    </>
  );
};

export default Resume;
