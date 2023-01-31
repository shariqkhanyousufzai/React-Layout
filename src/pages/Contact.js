import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'


function Contact(){
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [msg, setMsg] = useState("");
    // const [message, setMessage] = useState("");

    // let handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       let res = await fetch("http://localhost:3002/v1/website/contact/", {
    //         method: "POST",
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //           },
    //         body: JSON.stringify({
    //           name: name,
    //           email: email,
    //           phone: phone,
    //           msg: msg
    //         }),
    //       });
    //       let resJson = await res.json();
    //       console.log(res);
    //       if (res.status === 201) {
    //         setName("");
    //         setEmail("");
    //         setPhone("");
    //         setMsg("");
    //         setMessage("Email Has been Send");
    //       } else {
    //         setMessage("Some error occured");
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };


    return (
        <>
    
    <div>Contact</div>
        </>
    );
}

export default Contact;