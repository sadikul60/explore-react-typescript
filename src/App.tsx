
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Home name="Sadikul" email='sadikul@gmail.com' age='21' money='400' />
      <Blog />
    </div>
  );
}

export default App;
