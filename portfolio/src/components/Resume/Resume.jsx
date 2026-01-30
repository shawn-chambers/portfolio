import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Content from "../Content/Content";
import Gradient from "../Gradient";
import axios from "axios";

const Resume = (props) => {
  const [page, setPage] = useState("");
  const [lastEdited, setLastEdited] = useState("");
  const [resumeDocLink, setResumeDocLink] = useState("");

  useEffect(() => {
    axios
      .get("/data/portfolio.json")
      // .get(
      //   "https://shawnipedia.s3-us-west-1.amazonaws.com/shawnipedia-min.json"
      // )
      .then(({ data }) => {
        setPage(data[props.match.params.param]);
        setLastEdited(data.lastEdited);
        setResumeDocLink(data.resume_doc_link);
      });
  }, [props]);

  return (
    <>
      <Gradient />
      <SideBar resumeDocLink={resumeDocLink} />
      {page && <Content content={page} lastEdited={lastEdited} resumeDocLink={resumeDocLink} />}
    </>
  );
};

export default Resume;
