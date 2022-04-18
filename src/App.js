import './App.css';
import Download from './components/Download';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import ScrollTop from './components/ScrollTop';
import Search from './components/Search';
function App() {
  return (
    <div className="App text-white overflow-hidden">
        <Header />
        <Main />
        <Experience/>
        <Search/>
        <Download/>
        <ScrollTop/>
        <Footer />
    </div>
  );
}

export default App;
