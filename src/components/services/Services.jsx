import MacbookModelContainer from './macbook/MacbookModelContainer'
import './services.css'


const Services = () => {
  return (
    <div className='services'>
      <div className='sSection left'></div>
      <div className='sSection right'>
        <MacbookModelContainer />
      </div>
    </div>
  )
}



export default Services