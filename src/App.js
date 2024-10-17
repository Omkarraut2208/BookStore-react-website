import './App.css';
import Navbar from './Navbar';
import Herosection from './Herosection';
import TopBook from './TopBook';
import PopularBooks from './PopularBooks';
import Quote from './Quote';
import LatestArticle from './LatestArticle';

// bootstrap file
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <TopBook/>
      <PopularBooks/>
      <Quote/>
      <LatestArticle/>
      <Footer/>
    </div>
  );
}

export default App;
