import { atom, useAtomValue } from 'jotai';
import { useNavigate } from 'react-router';

export const authAtom = atom(false);

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useAtomValue(authAtom);

  if (!isAuthenticated) {
    return navigate('/signIn');
  }

  return children;
};

export default ProtectedRoute;
