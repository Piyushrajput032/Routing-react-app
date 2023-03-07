import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter,Navigate,Route,RouterProvider, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Page404 from './component/Page404';
import User from './component/User';
import Filter from './component/filter';
import Contact from './component/Contact';
import Company from './component/Company';
import Channel from './component/Channel';
import Others from './component/Others';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
         {/* <Route path='/*' element={<Page404/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
        <Route path='/User/:name' element={<User/>}/>
        <Route path='/filter' element={<Filter/>}/>
        <Route path="/contact/" element={<Contact />}>
          <Route path="company" element={<Company />} />
          <Route path="channel" element={<Channel />} />
          <Route path="others" element={<Others />} />
          {/* <Route path="account" element={<Account />} /> */}
        </Route>
        {/* <Route path='/contact/' element={<Contact/>}>
          <Route path='company' element={<Company/>}/> */}
          {/* <Route path='/channel' element={<Channel/>}/>
          <Route path='/others' element={<Others/>}/> */}
        {/* </Route>    */}
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
