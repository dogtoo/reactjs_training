import './App.css';
import UserInfo from './component/UserInfo';

function App() {
  return (
    <div>
      <div>
        Hello My First React Web
      </div>
      <UserInfo name="Dogtoo" age={38} gender="man" test="123"/>

    </div>
    
  );
}

export default App;
