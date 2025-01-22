// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {
//     const data = await resend.emails.send({
//       from: "karim <kareememadaleen@gmail.com>",
//       to: ["kareememadaleen@gmail.com"],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;
// const myEmailAddress = "kareememadaleen@gmail.com"; // Replace with your Gmail address

// export async function POST(req, res) {
//   try {
//     const { email, subject, message } = await req.json();

//     // Basic validation
//     if (!email || !subject || !message) {
//       return NextResponse.json(
//         { error: "Missing required fields." },
//         { status: 400 }
//       );
//     }

//     const data = await resend.emails.send({
//       from: `${fromEmail}`,
//       to: [myEmailAddress], // Use your Gmail address here
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { error: "Failed to send email." },
//       { status: 500 }
//     );
//   }
// }
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;
// const myEmailAddress = "kareememadaleen@gmail.com"; // Replace with your Gmail address

// export async function POST(req, res) {
//   try {
//     const { email, subject, message } = await req.json();

//     // Basic validation
//     if (!email || !subject || !message) {
//       return NextResponse.json(
//         { error: "Missing required fields." },
//         { status: 400 }
//       );
//     }

//     console.log("Received email data:", { email, subject, message }); // Log request body data

//     const data = await resend.emails.send({
//       from: `${fromEmail}`,
//       to: [myEmailAddress], // Use your Gmail address here
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Error sending email:", error);

//     // Differentiate error messages based on source
//     let errorMessage = "Failed to send email.";
//     if (error.response) {
//       // Likely Resend API error
//       errorMessage = `Resend API Error: ${error.response.data.message}`;
//     } else if (error.message) {
//       // Generic error handling
//       errorMessage = error.message;
//     }

//     return NextResponse.json({ error: errorMessage }, { status: 500 });
//   }
// }
/////////////////////////////////
// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend("re_dfbQifDR_NAmEmdQMa3hfNQHpfaTUhPeC");

// (async function () {
//   const { data, error } = await resend.emails.send({
//     from: "Acme <onboarding@resend.dev>",

//     to: ["sim.karimemad69873@alexu.edu.eg"],
//     subject: "Hello World",
//     html: "<strong>It works!</strong>",
//     react: (
//       <>
//         {/* <h1>{subject}</h1> */}
//         <p>Thank you for contacting us!</p>
//         <p>New message submitted:</p>
//         {/* <p>{message}</p> */}
//       </>
//     ),
//   });

//   if (error) {
//     return console.error({ error });
//   }

//   console.log({ data });
// })();
//////////////////////////
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY); // Double-check your API key
// const fromEmail = process.env.FROM_EMAIL;
// const myEmailAddress = "kareememadaleen@gmail.com"; // Replace with your Gmail address

// export async function POST(req, res) {
//   try {
//     const { email, subject, message } = await req.json();

//     // Basic validation
//     if (!email || !subject || !message) {
//       return NextResponse.json(
//         { error: "Missing required fields." },
//         { status: 400 }
//       );
//     }

//     console.log("Received email data:", { email, subject, message }); // Log request body data

//     const data = await resend.emails.send({
//       from: `${fromEmail}`,
//       to: [myEmailAddress], // Use your Gmail address here
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Error sending email:", error);

//     // Differentiate error messages based on source
//     let errorMessage = "Failed to send email.";
//     if (error.response) {
//       // Likely Resend API error
//       errorMessage = `Resend API Error: ${error.response.data.message}`;
//     } else if (error.message) {
//       // Generic error handling
//       errorMessage = error.message;
//     }

//     return NextResponse.json(
//       { error: errorMessage },
//       { status: error.response?.status || 500 } // Use specific status code if available
//     );
//   }
// }
//////////////////////////////////
// import React, { useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// const resend = new Resend("re_dfbQifDR_NAmEmdQMa3hfNQHpfaTUhPeC");

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
// };
