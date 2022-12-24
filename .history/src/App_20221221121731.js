import './App.css';
import {  RouterProvider } from 'react-router-dom';
import moduleName from '..';

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
