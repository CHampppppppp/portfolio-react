import Counter from './Counter'
import MacbookModelContainer from './macbook/MacbookModelContainer'
import MotorModelContainer from './motor/MotorContainer'
import KeyboardContainer from './keyboard/KeyboardContainer'
import './services.css'
import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'

const textVariants={
  initial:{
    y:-50,
    opacity:0,
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1,
    },
  },
}

const listVariants={
  initial:{
    x:50,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
    },
  },
}

const services = [
  {
    id:1,
    img:"/service1.png",
    title:"Web Development",
    counter: 35,
  },
  {
    id:2,
    img:"/service2.png",
    title:"Full Stack Development",
    counter: 23,
  },
  {
    id:3,
    img:"/service3.png",
    title:"Game Development(program)",
    counter: 46
  }
]

const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1)
  const ref = useRef()
  const isInView = useInView(ref,{margin:"-200px"})

  return (
    <div className='services' id='services' ref={ref}>
      <div className='sSection left'>
        <motion.h1 className='sTitle' variants={textVariants} initial="initial" animate={isInView?"animate":"initial"} >我能做什么？</motion.h1>
        <motion.div className="serviceList" variants={listVariants} initial="initial" animate={isInView?"animate":"initial"}>  
          {services.map((serive) => (
            <motion.div 
            variants={listVariants}  
            className="service" 
            key={serive.id}
            onClick={()=>setCurrentServiceId(serive.id)}
            >
              <motion.div variants={listVariants} className='serviceIcon'>
                <img src={serive.img} alt="" />
              </motion.div>
              <motion.div variants={listVariants}   className='serviceInfo'>
                <h2>{serive.title}</h2>
                <h3>{serive.counter}</h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={104} text="Projects Completed" />
          <Counter from={0} to={72} text="Happy Clients" />
        </div>
      </div>
      <div className='sSection right'>
        {currentServiceId === 1 && <MacbookModelContainer />}
        {currentServiceId === 2 && <MotorModelContainer />}
        {currentServiceId === 3 && <KeyboardContainer />}
      </div>
    </div>
  )
}



export default Services