import React from 'react';
import { useNavigate } from 'react-router';
import { useSetAtom } from 'jotai';
import { isAuthenticatedAtom } from '../../App';
import lamisLogo from '../../../../ui/src/assets/lamis/logo-text.png';

export default function SignIn() {
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.username.value === 'admin' && e.target.password.value === 'snuhpia123!') {
      setIsAuthenticated(true);
      navigate('/');
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900">
      <img
        className="w-48"
        src={lamisLogo}
        alt="logo"
      />
      <form
        className="-mt-3 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-md bg-gray-800 p-1.5 text-center text-white"
          id="username"
          type="text"
          placeholder="Username"
        />
        <input
          className="rounded-md bg-gray-800 p-1.5 text-center text-white"
          id="password"
          type="password"
          placeholder="Password"
        />
        <button
          className="rounded-md bg-blue-600 p-2 text-white hover:bg-blue-800"
          type="submit"
        >
          Sign In{' '}
        </button>
      </form>
    </div>
  );
}
