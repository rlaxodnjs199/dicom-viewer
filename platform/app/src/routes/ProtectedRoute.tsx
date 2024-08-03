import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router';
import { isAuthenticatedAtom } from '../App';

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  if (!isAuthenticated) {
    return navigate('/signIn');
  }

  return children;
};

export default ProtectedRoute;
