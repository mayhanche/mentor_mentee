import Nav from '@/components/initialpageUI/Navigation';
import Hero from '@/components/initialpageUI/Herosection';
import Results from '@/components/initialpageUI/Results'; 
import Contact from '@/components/initialpageUI/Contact';
import Footer from '@/components/initialpageUI/Footer';

const page = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Results/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
