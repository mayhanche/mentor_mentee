import GlobalNav from '@/components/dashboardpageUI/Globalnav'
import About from '@/components/aboutpageUI/About'
import Footer from '@/components/initialpageUI/Footer'

const page = () => {
  return (
    <div>
        <GlobalNav/>
        <About/>
        <Footer/>
    </div>
  )
}

export default page
