import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState ({name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false);
  const {alert, showAlert, hideAlert} = useAlert();



  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Majd Khawaldeh",
        from_email: form.email,
        to_email: "majdkhawaldeh10@gmail.com",
        message: form.message,
        
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      ()=> {
      setIsLoading(false);
      showAlert({
        show: true,
        text: "Thank you for your message 😃",
        type: "success",

    });
    setTimeout(() => {
      hideAlert(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  }
  ).catch((error) => {
    setIsLoading(false);
    console.log(error);
    showAlert({
      show: true,
      text: "Something went wrong 😕",
      type: "danger",
    });
  });
}



  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
         {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1> 

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how I can help!'
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button
            type='submit'
            disabled={isLoading}
            className='btn'
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;