import { useState } from "react";
import "./contact.scss";
import * as emailjs from "emailjs-com";
import React from "react";



export default function Contact() {
  
   function sendEmail(e) {
     console.log("In send Email");
    e.preventDefault();
    emailjs.sendForm("service_5tpneqa", "template_0yv2ute", e.target, "user_UXV0zTjDI12RLOHpj2vnF")
    .then((result) => {
      document.getElementById("one").reset();
      console.log("Thank you!");
    }, (error) => {
    console.log(error.text);
    });
    }    
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>

                    <form  className="form" id="one" onSubmit={sendEmail}>
                    <label htmlFor="name" >Enter your name*</label>
                        <div className="form-field">
                            
                            <input type="text" id="name" name="Name" required/>
                        </div>
                        <label htmlFor="email" >Enter your email*</label>
                        <div className="form-field">
                            
                            <input type="email" id="email" name="Email" required type="email"/>
                        </div>
                        <label type="label" htmlFor="subject"  >Enter your phone number*</label>
                        <div className="form-field">
                            
                            <input type="text" id="subject" name="Number" pattern="[0-9]" required/>
                        </div>
                        <label type="label" >Enter your Message*</label>
                        <div className="form-field">
                            
                            <textarea name="textarea" id="textarea" cols="30" rows="10" name="Message" required></textarea>
                        </div>
                        <div className="form-field f-button">
                            {/* <PrimaryButton title={'Send Email'} /> */
                                  <button>
                                  Send Message!
                                </button>}
                        </div>
                    </form>
                
              </div>
    </div>
  );
}
