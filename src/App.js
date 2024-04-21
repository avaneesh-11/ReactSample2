import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import React,{startTransition} from 'react';
const UserModule = React.lazy(() => import('./pages/UsersPage'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="users/create" state={{startTransition:true}} replace />} />
        <Route path="/users/*" element={<UserModule />} />
      </Routes>
     
    </div>
  );
}

export default App;
