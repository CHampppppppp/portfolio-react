import Hero from './components/hero/Hero.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Services from './components/services/Services.jsx'
import Contact from './components/contact/Contact.jsx'


const App = () => {
  return (
    <div className='container'>
      <section>
        <Hero/>
      </section>
      <section>
        <Services/>
      </section>
      <section>
        <Portfolio/>
      </section>
      <section>
        <Contact/>
      </section>
    </div>
  )
}

export default App