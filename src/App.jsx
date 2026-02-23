import Navbar from './components/Navbar';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> 
      <RegisterPage />*/}
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
