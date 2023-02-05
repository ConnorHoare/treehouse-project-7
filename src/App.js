import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import Navbar from './components/Nabar';
import Photo from './components/Photo';

function App() {
  return (
    <div className="App">
        <SearchForm />
        <Navbar />
        <Photo />
    </div>
  );
}

export default App;
