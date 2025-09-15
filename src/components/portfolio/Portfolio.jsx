import './portfolio.css'

const items = [
  {
    id:1,
    img:"/p1.jpg",
    title:"E-commerce Website",
    desc:"A responsive e-commerce website built with React and Node.js",
    link:"https://github.com",
  },
  {
    id:2,
    img:"/p2.jpg",
    title:"E-commerce Website",
    desc:"A responsive e-commerce website built with React and Node.js",
    link:"https://github.com",
  },
  {
    id:3,
    img:"/p3.jpg",
    title:"E-commerce Website",
    desc:"A responsive e-commerce website built with React and Node.js",
    link:"https://github.com",
  },
  {
    id:4,
    img:"/p4.jpg",
    title:"E-commerce Website",
    desc:"A responsive e-commerce website built with React and Node.js",
    link:"https://github.com",
  },
  {
    id:5,
    img:"/p5.jpg",
    title:"E-commerce Website",
    desc:"A responsive e-commerce website built with React and Node.js",
    link:"https://github.com",
  },
]

const ShowItem = ({item}) => {
  return (
    <div className='pItem'>
      <div className="pImg">
        <img src={item.img} alt="" />
      </div>
      <div className="pText">
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <a href={item.link}>
          <button>View Project</button>
        </a>
      </div>
    </div>
  )
}

const Portfolio = () => {
  return (
    <div className='portfolio'>
      {/* <div className="pList">
        {items.map((item) => (
          <ShowItem item={item} key={item.id} />
        ))}
      </div> */}
    </div>
  )
}

export default Portfolio