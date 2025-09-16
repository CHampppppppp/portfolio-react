import './contact.css'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import ContactSvg from './ContactSvg.jsx'
import {motion, useInView} from 'motion/react'

const listVariant = {
  initial:{
    x:100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.2,
    },
  }
}

const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const form = useRef()
  const ref = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current, 
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true)
          form.current.reset()
          setSuccess(false)
        },
        (error) => {
          setSuccess(false)
          console.error('EmailJS Error:', error);
          setError(true)
        },
      );
  };

  const isInView = useInView(ref)

  return (
    <div className='contact' ref={ref}>
      <div className="cSection">
        <motion.form variants={listVariant} animate={isInView?'animate':'initial'} ref={form} onSubmit={sendEmail}>
          <motion.h1 variants={listVariant} className="cTitle">联系我~</motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input type='text' name="name" placeholder='Champ' />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input type='text' name="email" placeholder='1handsome3206@gmail.com' />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea name="message" placeholder='请输入您的消息' rows={10} />
          </motion.div>
          <motion.button variants={listVariant} className="formButton">xiu~</motion.button>
          {success && <span>发送成功</span>}
          {error && <span>发送失败</span>}
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  )
}

export default Contact