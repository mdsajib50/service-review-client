import './App.css';
import { createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>
      }
  ])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
