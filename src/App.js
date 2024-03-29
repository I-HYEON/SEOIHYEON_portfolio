import './App.css';
import AppRouter from './AppRouter';
import NavBar from './Components/Common/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AppRouter/>
    </div>
  );
}

export default App;
