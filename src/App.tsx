import './App.css';
import UserInfo from './component/UserInfo';

function App() {
  const edit = () => {
    console.log('edit on');
  }

  return (
    <div>
      <div>
        Hello My First React Web
      </div>
      <UserInfo name="Dogtoo" age={38} gender="man" imgurl="" handleEdit={()=>edit()}/>

    </div>
    
  );
}

export default App;
