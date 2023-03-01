import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import Navbar from './components/Nabar';
import Photo from './components/Photo';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
        <SearchForm />
        <Navbar />
        <Photo />
        <NotFound />
    </div>
  );
}

export default App;
