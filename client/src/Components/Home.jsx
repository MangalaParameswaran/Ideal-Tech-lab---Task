import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { useParams, useNavigate } from "react-router-dom";
import { message } from "antd";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [Books, setBooks] = useState([]);
  console.log(Books);
  // const { id } = useParams();
  const navigate = useNavigate();

  const deleteBtn = async (id) => {
    try {
      setLoading(true);
      let data = await axios.delete(`http://localhost:8000/delete-book/${id}`);
      message.success("Successfully Deleted");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      message.error(`${error}`);
    }
  };

  useEffect(() => {
    // setLoading(true)
    axios
      .get(`http://localhost:8000/get-book`)
      .then((res) => {
        // console.log("res",res.data.books);
        setBooks(res.data.books);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section>
          <div className="container-fluid my-5">
            <div className="row">
              {Books ? (
                Books.map((e) => (
                  <div
                    className="borders-read col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 mx-auto my-2 read-body"
                    key={e._id}
                  >
                    <hr />
                    <h2>
                      <span className="mt-2">Title:</span> {e.BookTitle}
                    </h2>
                    <hr />
                    <h4 className="text-success">
                      <span className="mt-2">Author:</span> {e.BookAuthor}
                    </h4>
                    <p className="text-secondary fs-6">
                      <span className="mt-2 fs-4">Description: </span>
                      {e.BookDesc}
                    </p>
                    <p className="text-secondary">
                      <span className="mt-2 fs-4">Introduction: </span>
                      {e.BookIntro}
                    </p>
                    <p className="text-secondary">
                      <span className="mt-2 fs-4">Author Mail ID: </span>
                      <b>{e.BookEmail}</b>
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <div className="edit-btn">
                          <Link to={`/edit/${e._id}`}>
                            <i className="fa-solid fa-user-pen"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="delete-btn ">
                          <button onClick={() => deleteBtn(e._id)} style={{backgroundColor:"rgb(17,17,34)", border:'1px solid blueviolet'}}>
                            {" "}
                            <i className="fa-regular fa-trash-can"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
