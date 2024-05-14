import React, { useEffect, useState } from 'react'
import {message} from 'antd'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from './Spinner';


const Edit = () => {

    const [loading, setLoading]=useState(false)
    const [BookTitle, setBookTitle] = useState("");
    const [BookEmail, setBookEmail] = useState("");
    const [BookAuthor, setBookAuthor] = useState("");
    const [BookIntro, setBookIntro] = useState("");
    const [BookDesc, setBookDesc] = useState("");
    let navigate=useNavigate()
    const {id}=useParams()

    const UpdateBook=async()=>{
        try {
            if (!BookTitle || !BookAuthor || !BookEmail || !BookIntro || !BookDesc) {
                message.error("All the Filed is required")
                return;
              }  

              let res=await axios.put('http://localhost:8000/edit-book/', data)
        
        } catch (error) {
            console.log(error);
      message.error(`${error}`);
        }
    }

    const getData=async()=>{
        setLoading(true)
        axios.get(`http://localhost:8000/get-book-by/${id}`).then((res)=>{
            // console.log("res.data",res.data);
            setBookTitle(res.data.books.BookTitle)
            setBookAuthor(res.data.books.BookAuthor)
            setBookEmail(res.data.books.BookEmail)
            setBookIntro(res.data.books.BookIntro)
            setBookDesc(res.data.books.BookDesc)
        setLoading(false)
        message.success("successfully Fectched single Data")

        }).catch((err)=>{
            console.log(err);
            message.error(`${err}`)

        })
    }

    useEffect(()=>{
        getData()
    }, [])

  return (
    <>
    {loading ? (
        <Spinner/>
    ) : (
        <section>
        <div className="container add-book">
          <hr/>
          <h1 className="my-5">Update <i className="fa-solid fa-book"></i> &nbsp; Book</h1>
          <hr/>
          <div className="row my-5">
            <div className="borders col-11 mx-auto col-md-10 col-sm-10 col-lg-9 col-xl-9">
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    required
                    className="form-control text-light"
                    aria-describedby="emailHelp"
                    placeholder="Book title"
                    value={BookTitle} onChange={(e)=>setBookTitle(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    required
                    className="form-control text-light bg-black"
                    aria-describedby="emailHelp"
                    placeholder="enter ur email"
                    value={BookEmail}
                     onChange={(e)=>setBookEmail(e)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    required
                    className="form-control text-light"
                    aria-describedby="emailHelp"
                    placeholder="Author Name"
                    value={BookAuthor} onChange={(e)=>setBookAuthor(e.target.value)} 
                  />
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control  text-light"
                    required
                    placeholder="Leave a Introdution here"
                    id="floatingTextarea2"
                    style={{height: "100px"}}
                    value={BookIntro} onChange={(e)=>setBookIntro(e.target.value)}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Leave a Introdution here...</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control  text-light"
                    required
                    id="floatingTextarea2"
                    placeholder="Leave a Introdution here"
                    style={{height: "100px"}}
                    value={BookDesc} onChange={(e)=>setBookDesc(e.target.value)}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Leave a Descreption here..</label>
                </div>
                <div className="button my-5">
                <button type="button" className="btn btn-primary w-25 fw-bold fs-5"  onClick={UpdateBook} >Update Book</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )}
   </>
  )
}

export default Edit