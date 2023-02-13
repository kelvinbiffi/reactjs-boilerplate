import './App.css';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <div className="App">
    <main>
      <Outlet />
    </main>
  </div>
);
