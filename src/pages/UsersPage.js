import React,{startTransition} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';

const CreateUser = React.lazy(() => import('../components/CreateUser'));
const ViewUser = React.lazy(() => import('../components/ViewUser'));

function UserPage() {
  return (
    <div>
        <LandingPage/>
        <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="create" element={<CreateUser />} />
        <Route path="view" element={<ViewUser />} />
        <Route path="/" element={<Navigate to="create" state={{startTransition:true}} replace />} />
      </Routes>
    </React.Suspense>
    </div>
  );
}

export default UserPage;
