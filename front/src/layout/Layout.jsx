import Header from '../components/Header/Header'
import Router from '../components/Routes/Routers'
import Footer from '../components/Footer/Footer'
export const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Router/>
        </main>
        <Footer/>
    </div>
    
  )
}
export default Layout