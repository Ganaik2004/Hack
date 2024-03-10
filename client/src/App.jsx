import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'
import Footer from './components/Footer'
import CreateListing from './pages/CreateListing'
import PrivateRoute from './components/PrivateRoute'
import UpdateListings from './pages/UpdateListings'
import Listing from './pages/Listing'
import Search from './pages/Search'
import Search1 from './pages/Search1'
import Event from './pages/Event'
import Players from './pages/Players'
import User from './pages/User'
import HomePage from './components/HomePage'
import SideBar from './components/SideBar'
import Accessories from './pages/Accessories'
import Categories from './pages/Category'
import Cricket from './pages/category/Cricket'
import Badminton from './pages/category/Badminton'
import Basketball from './pages/category/Basketball'
import Football from './pages/category/Football'
import Tennis from './pages/category/Tennis'
function App() {
  return <BrowserRouter>
  <Header/>
  <div className='flex'>
    <SideBar/>
    <main className='flex-grow'>
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/sign-in" element={<SignIn/>}/>
   <Route path="/sign-up" element={<SignUp/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/search" element={<Search/>}/>
   <Route path="/search1" element={<Search1/>}/>
   <Route path="/event" element={<Event/>}/>
   <Route path="/accessories" element={<Accessories/>}/>
   <Route path="/categories" element={<Categories/>}/>
   <Route path="/category/cricket" element={<Cricket/>}/>
   <Route path="/category/badminton" element={<Badminton/>}/>
   <Route path="/category/basketball" element={<Basketball/>}/>
   <Route path="/category/football" element={<Football/>}/>
   <Route path="/category/tennis" element={<Tennis/>}/>
   <Route path="/players" element={<Players/>}/>
   <Route path="/listing/:listingId" element={<Listing/>}/>
   <Route path="/user/:userId" element={<User/>}/>
   <Route element={<PrivateRoute/>}>
   <Route path="/profile" element={<Profile/>}/>
   <Route path="/create-listing" element={<CreateListing/>}/>
   <Route path="/update-listing/:listingID" element={<UpdateListings/>}/>
   </Route>
  </Routes>
  </main>
  </div>
 
  <Footer/>
  </BrowserRouter>
}
export default App