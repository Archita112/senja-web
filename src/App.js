// import logo from './logo.svg';
import Navbar from './components/navbar/navbar.jsx';
import Mainhero from './components/mainhero/mainhero.jsx';
import Footer from './components/footer/footer.jsx';
import './App.css';

function App() {
  return (
    <div className='lg:overflow-y-hidden lg:h-screen sm:overflow-y-auto'>
      <div>
        <Navbar />
      </div>
      <div>
        <Mainhero />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
