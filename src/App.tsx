
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Person from './components/Person/Person';
import Props from './components/Props/Props';

function App() {
  const personName = {
    first: 'Sadik',
    last: 'Ahmed'
  }
  return (
    <div>
      <Props name='Sadik' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <Home name="Sadikul" email='sadikul@gmail.com' age='21' money='400' />
      <Blog />
    </div>
  );
}

export default App;
