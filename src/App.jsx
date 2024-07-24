import AppLayout from "./AppLayout";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
  
    <BrowserRouter>
   <Routes>
   <Route element={AppLayout}>
    <Route path='/' element={<Home/>}/>
   </Route>
   </Routes>
  </BrowserRouter>
  

  )
}


// function App() {
// 	return (
//   <>
//    <Navbar />
//     <BrowserRouter>
//    <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/menu' element={<Menu/>}/>
//    </Routes>
//   </BrowserRouter>
//   <Footer />
//   </>
//   )
// }


export default App
// sama