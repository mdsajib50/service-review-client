import './App.css';
import {  RouterProvider } from 'react-router-dom';
import moduleName from './Router/Routes';

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
