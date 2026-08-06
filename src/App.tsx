import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
