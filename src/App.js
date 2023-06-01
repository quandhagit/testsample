import logo from './logo.svg';
import './App.css';
import Sidebar from './layouts/sidebar';
import MainContent from './layouts/mainContent';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
