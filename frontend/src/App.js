import './App.css';
import Sidebar from './components/Sidebar';
import CardList from './components/CardList';
import FirstRow from './components/FirstRow';
import SecondRow from './components/SecondRow';

const mainStyle = {
  margin: '0 3rem 1rem 7rem',
  height: '100%',
  width: '100'
}

function App() {
  return (
    <>
      <Sidebar />
      <div style={mainStyle}>
        <FirstRow />
        <SecondRow />
        <div style={{ display: 'flex', flexDirection: 'row', height: '80%' }}>
          <CardList />
        </div>
      </div>
    </>
  );
}

export default App;
