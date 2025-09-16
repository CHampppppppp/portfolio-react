import { TypeAnimation } from "react-type-animation"

import {motion} from "motion/react"

const Speech = () => {
  return (
    <motion.div className='bubbleContainer' aniamte={{opacity:[0,1]}} transition={{duration:1}}>
        <div className="bubble">
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '我叫champ',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        '我想成为全栈程序猿',
        1500,
        '我喜欢开摩托车',
        1500,
        '我的dream bike是aprilia rs660',
        1500,
        '左边这个那个不是我',
        1500,
        '右边这个是我',
        1500
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      // style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </div>
        <img src="/champ.png" alt="champ" />
    </motion.div>
  )
}

export default Speech