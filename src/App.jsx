import AppLayout from './AppLayout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/MenuSection';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import DailyOffers from './pages/DailyOffers';
import Location from './pages/Location';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='home' />} />
          <Route path='home' element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='dailyoffers' element={<DailyOffers />} />
          <Route path='location' element={<Location />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<LogIn />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
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

export default App;
// sama
