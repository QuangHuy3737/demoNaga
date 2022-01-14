import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import ButtonUpgrade from './components/ButtonUpgrade';
import TableContent from './components/Table';
import ButtonDown from './components/ButtonDown';

function App() {
  return (
    <div className="App">
      <Card>Test</Card>
      <TableContent></TableContent>
      <ButtonDown></ButtonDown>
    </div>
  );
}

export default App;
