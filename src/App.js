import './App.css';
import Header from './components/header';
import Options from './components/options';
import MainContent from "./components/mainContent";
import Footer from "./components/footer";


function App() {
  return (
    <div className="container">
      <Header />
      <Options/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
