import './hero.css'
import Speech from './Speech.jsx'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero'>
      {/* 左侧 */}
      <div className='hSection left'>
        {/* 标题 */}
        <h1 className="hTitle">
          你好,
          <br />
          <span>我叫Champ!</span>
        </h1>
        {/* 描述 */}
        <div className='awards'>
          <h2>全栈程序猿</h2>
          <p>这是一句很有深度又很装的话</p>
          <div className='awardList'>
            <img src='./award1.png' alt=''></img>
            <img src='./award2.png' alt=''></img>
            <img src='./award3.png' alt=''></img>
          </div>
        </div>
        {/* 按钮 */}
        <a href='#services'>  
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"
              />
              <motion.path
                animate={{ y: [0, 5] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                d="M12 5V8"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </a>
      </div>

      {/* 右侧 */}
      <div className='hSection right'>
        {/* 关注 */}
        <div className='follow'>
          <a href="/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="/">
            <img src="/youtube.png" alt="" />
          </a>
        </div>

        {/* 引用 */}
        <Speech />

        {/* 认证 */}
        <div className='certificate'>
          <img src="/certificate.png" alt="" />
          LMAO CERTIFICATED
          <br />
          UNPROFESSIONAL
          <br />
          FULL STACK DEV
        </div>

        {/* 联系 */}
        <a href="/#contact" className='contactLink'>
          <div className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink"></circle>
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className='circleText'>
                <textPath href="#innerCirclePath" style={{ fontSize: '32px' }}>不错！</textPath>
              </text>
              <text className='circleText'>
                <textPath href="#innerCirclePath" style={{ fontSize: '32px' }} startOffset="40%">联系我~</textPath>
              </text>
            </svg>
          </div>
        </a>
        
      </div>
    </div>

  )
}

export default Hero