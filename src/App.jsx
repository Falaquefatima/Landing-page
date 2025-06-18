import Header from "./components/Header";
import Banner from "./components/Banner";
import SliderComponent from "./components/SliderComponent";
import Trade from "./components/Trade";
import NewCryptoCurrency from "./components/NewCryptoCurrency";
import StartCrypto from "./components/StartCrypto";
import CryptoInvestment from "./components/CryptoInvestment";
import Card2 from "./components/Card2";
import Blocks from './components/Blocks'
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
    <div className="mx-5"> <Header/></div>
    <Banner/>
    <SliderComponent/>
    <Trade/>
    <NewCryptoCurrency/>
    <StartCrypto/>
    <CryptoInvestment/>
    <Card2/>
    <Blocks/>
    <Footer/>
    
    </>
  );
}

export default App;
