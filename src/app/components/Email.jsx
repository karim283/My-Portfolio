// import React from "react";
// import emailjs from "@emailjs/browser";

// const EmailForm = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const serviceid = "service_oum69jb";
//     const templateid = "template_6feyl9d";
//     const publickey = "oSGHQ8kfdn7L_W1oH";
//     const templateparams = {
//       from_email: email,
//       to_name: "karim",
//       message: message,
//     };
//     emailjs
//       .send(serviceid, templateid, templateparams, publickey)
//       .then((Response) => {
//         console.log("sent successfully", Response);
//         setEmail("");
//         setMessage("");
//       })
//       .catch((error) => {
//         console.log("failed", error);
//       });
//   };

//   return (
//     <section
//       id="contact"
//       className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-10">
//         <h5 className="text-xl font-bold text-white my-2">
//           Let&apos;s Connect
//         </h5>
//         <p className="text-[#ADB7BE] mb-4 max-w-md">
//           {" "}
//           I&apos;m currently looking for new opportunities, my inbox is always
//           open. Whether you have a question or just want to say hi, I&apos;ll
//           try my best to get back to you!
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href="https://github.com/karim283">
//             <Image src={GithubIcon} alt="Github Icon" />
//           </Link>
//           <Link href="https://www.linkedin.com/in/kareem-emad-7b5516246">
//             <Image src={LinkedinIcon} alt="Linkedin Icon" />
//           </Link>
//         </div>
//       </div>
//       <div>
//         {emailSubmitted ? (
//           <p className="text-green-500 text-sm mt-2">
//             Email sent successfully!
//           </p>
//         ) : (
//           <form className="flex flex-col" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="text-white block mb-2 text-sm font-medium"
//               >
//                 Your email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="jacob@google.com"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="subject"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 id="subject"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Just saying hi"
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Let's talk about..."
//                 onChange={(e) => setMessage(e.target.value)}
//                 value={message}
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };
// import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";

// const EmailForm = () => {
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [emailSubmitted, setEmailSubmitted] = useState(false);

//   useEffect(() => {
//     // Ensure useEffect runs only on the client side
//     setEmail("");
//     setSubject("");
//     setMessage("");
//     setEmailSubmitted(false);
//   }, []); // Empty dependency array ensures this runs only once, similar to componentDidMount

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const serviceid = "your_service_id"; // Replace with your actual service ID
//     const templateid = "your_template_id"; // Replace with your actual template ID
//     const publickey = "your_public_key"; // Replace with your actual public key
//     const templateparams = {
//       from_email: email,
//       to_name: "karim",
//       subject: subject,
//       message: message,
//     };

//     emailjs
//       .send(serviceid, templateid, templateparams, publickey)
//       .then((response) => {
//         console.log("Email sent successfully", response);
//         setEmailSubmitted(true);
//         setEmail("");
//         setSubject("");
//         setMessage("");
//       })
//       .catch((error) => {
//         console.error("Email failed to send", error);
//       });
//   };

// return (
//   <section
//     id="contact"
//     className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//   >
//     {/* Your background element and other content here */}
//     <div>
//       {emailSubmitted ? (
//         <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
//       ) : (
//         <form className="flex flex-col" onSubmit={handleSubmit}>
//           {/* Email input */}
//           <div className="mb-6">
//             <label
//               htmlFor="email"
//               className="text-white block mb-2 text-sm font-medium"
//             >
//               Your email
//             </label>
//             <input
//               name="email"
//               type="email"
//               id="email"
//               required
//               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//               placeholder="jacob@google.com"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//             />
//           </div>
//           {/* Subject input */}
//           <div className="mb-6">
//             <label
//               htmlFor="subject"
//               className="text-white block text-sm mb-2 font-medium"
//             >
//               Subject
//             </label>
//             <input
//               name="subject"
//               type="text"
//               id="subject"
//               required
//               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//               placeholder="Just saying hi"
//               onChange={(e) => setSubject(e.target.value)}
//               value={subject}
//             />
//           </div>
//           {/* Message textarea */}
//           <div className="mb-6">
//             <label
//               htmlFor="message"
//               className="text-white block text-sm mb-2 font-medium"
//             >
//               Message
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//               placeholder="Let's talk about..."
//               onChange={(e) => setMessage(e.target.value)}
//               value={message}
//             />
//           </div>
//           {/* Submit button */}
//           <button
//             type="submit"
//             className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//           >
//             Send Message
//           </button>
//         </form>
//       )}
//     </div>
//   </section>
// );

// export default Email;
// components/ContactForm.js
"use client";

import { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send email using EmailJS
    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      await emailjs.send(
        "service_oum69jb", // Replace with your EmailJS service ID
        "template_6feyl9d", // Replace with your EmailJS template ID
        templateParams,
        "oSGHQ8kfdn7L_W1oH" // Replace with your EmailJS user ID
      );

      // await emailjs.send(
      //   "service_7tj42jj", // Replace with your EmailJS service ID
      //   "template_22uy4cf", // Replace with your EmailJS template ID
      //   templateParams,
      //   "jN9wsn8Bff4Be-bka" // Replace with your EmailJS user ID
      // );

      setSubmitted(true);
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/karim283">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/kareem-emad-7b5516246">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        {submitted ? (
          <p className="text-green-600 mb-4">Message sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 w-96"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 w-96"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 w-96"
              />
            </div>
            <button
              type="submit"
              className="inline-block bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 w-96"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
