
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import App from "../App";
import Header from "../components/Header";
import Login from "../views/auth/Login";
import Footer from '../components/Footer'
// import Background from "../components/BackgroundWImage";
import IMAGE from '../assets/backgroundImage.jpeg'
import Register from "../views/auth/Register";
import LamanBerita from "../views/pages/LamanBerita";
const Router = ()=>{
    return(
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="/register" element={
            <div
                style={{
                    backgroundImage: `url("${IMAGE}")`,
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    height:'100%'
                }}
            > 
              <Register />
            </div>
          } />
          <Route path="/login" element={
             <div
                className='h-full'
                style={{
                    backgroundImage: `url("${IMAGE}")`,
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    height:'90vh'
                }}
            > 
                <Login />
            </div>
              } />
          <Route path="/berita" element={<LamanBerita />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router