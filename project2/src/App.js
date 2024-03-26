import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from "./pages/About";
import Cart from "./pages/Cart";
import Cartitems from "./pages/Cartitems";
import Contact from "./pages/Contact";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Singleproduct from "./pages/Singleproduct";
import Footer from "./component/Footer";
import CartcontextProvider from "./context/Cartcontext";
import Allproducts from "./pages/Allproducts";
import { useState } from "react";

function App() {
  const[search, setsearch] = useState('')
  return (
    <div className="App">
      <CartcontextProvider>
     <Router>
      <Navbar search = {search} setsearch={setsearch}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartitems" element={<Cartitems />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home/:id" element={<Singleproduct />} />
        <Route path="/allproducts" element={<Allproducts />} />
      </Routes>
      <Footer />
     </Router>
     </CartcontextProvider>
    </div>
  );
}

export default App;
