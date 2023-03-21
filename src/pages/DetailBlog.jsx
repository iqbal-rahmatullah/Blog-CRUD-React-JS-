import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigations from "../components/Navigations";

function DetailBlog() {
  const [dataBlog, setDataBlog] = useState([{}]);
  const { blog_id } = useParams();

  const fectdata = () => {
    axios
      .get("https://bootcamp.smafg.sch.id/api/exercises/posts")
      .then((res) => {
        const result = res.data.data.find((a) => a.id === blog_id);
        setDataBlog(result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fectdata();
  }, []);

  return (
    <div>
      <Navigations />
      {dataBlog ? (
        <div className='blog_post'>
          <h2>{dataBlog.title}</h2>
          <p>{dataBlog.content}</p>
        </div>
      ) : (
        <p>Proses Data</p>
      )}
    </div>
  );
}

export default DetailBlog;
