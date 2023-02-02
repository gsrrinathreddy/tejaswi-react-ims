import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import RNavbar from './components/RNavbar';
import Cake from './pages/Cake';
import Icecream from './pages/Icecream';
import Chocolate from './pages/Chocolate';
import Cart from './pages/Cart';
import Gifts from './pages/Gifts';
import LandingPage from './pages/LandingPage';
import Flowers from './pages/Flowers';
import LoginRegister from './pages/LoginRegister';
import Notfound from './pages/Notfound';
import Checkout from './pages/Checkout';

console.log("Tejus bakery");
console.log("Sandra");
function App(props) {
  let n1=['Cake', 'Icecream', 'Chocolate','Flowers','Gifts'];
  let n2=['Login/Register', 'My Account', 'My Orders', 'Contact Us',"FAQ's"];
  
  return (
    <div className="App">
      {/* <h1>My Cake Store</h1> */}
      <BrowserRouter>
      <RNavbar pages={n1}
                settings={n2}
                />
      <Routes>
        <Route path='/' element={<Chocolate/>}/>
        <Route path='Cake' element={<Cake/>}/>
        <Route path='Icecream' element={<Icecream/>}/>
        <Route path='Chocolate' element={<Chocolate/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='Gifts' element={<Gifts/>}/>
        <Route path='Flowers' element={<Flowers/>}/>
        <Route path='Login/Register' element={<LoginRegister/>}/>
        <Route path='/*' element={<Notfound/>}/>
        <Route path='cart/Checkout' element={<Checkout/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


/*

<br/>
      <RBadge badgeContent={noOfCakes}/>
      <br/>
      <CakeView/>
      */