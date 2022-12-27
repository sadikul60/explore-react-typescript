
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Person from './components/Person/Person';
import Props from './components/Props/Props';
import Status from './components/Status/Status';

function App() {
  const personName = {
    first: 'Sadik',
    last: 'Ahmed',
    age: 21
  }
  return (
    <div>
      {/* <Props name='Sadik' messageCount={20} isLoggedIn={false} /> */}
      {/* <Person name={personName} /> */}
      {/* <Home name="Sadikul" email='sadikul@gmail.com' age='21' money='400' /> */}
      {/* <Blog /> */}
      <Status status='success' />
    </div>
  );
}

export default App;
