import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sendtrans from './Sendtrans';
import WalletCardEthers from './WalletCardEthers';
import Home from './Home';
import Voting from './Voting';
import Nav from './Nav';
import Footer from './Footer';
import { Route, Routes} from 'react-router-dom';
function App() {
  return (
   
          <div className="min-h-screen">
             <div className="gradient-bg-welcome">
         {/* <Navbar/> */}
          
         <Nav/>
         
        {/* <BrowserRouter> */}
        <Routes>
           <Route path="/voting" element={ <Voting/>} />
           <Route path="/*" element={ <Home/>} />       
           <Route path = "/sendtrans" element= {<Sendtrans/>}/>
           <Route path = "/walletcardether" element= {<WalletCardEthers/>}/>
        </Routes>       
        
        {/* </BrowserRouter> */}
        <Footer/> 
    </div> 
</div>
   

  );
}

export default App;
