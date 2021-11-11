import logo from './logo.svg';
import './App.css';
import CollapsibleSidebar from './Collapsible-Sidebar'
import Sidebar from './Sidebar';
function App() {
  return (
    <div>
      {false && <Sidebar/>}
      <CollapsibleSidebar/>
    </div>
  );
}

export default App;
