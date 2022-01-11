//CSS
import './App.css';
//Components
import Profile from './components/Profile';
import UserList from './components/UserList'

//Context
import UserState from './context/user/UserState'

function App() {
  return (
    <UserState>

    <div className="App">
      <h1>Hola Mundo</h1>
      <UserList/>
      <Profile/>
    </div>
    </UserState>
  );
}

export default App;
