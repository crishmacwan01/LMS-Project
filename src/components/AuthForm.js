import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Glassmorphic authentication form supporting login and registration.
 * Uses TailwindCSS for styling – the project already ships with Tailwind v3.
 * The component is fully functional with the existing AuthContext (login, register).
 */
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name, email, password);
      }
      // After successful auth, redirect to dashboard (or home)
      navigate('/');
    } catch (err) {
      // Errors are already handled inside AuthContext via toast
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-primary-text">
          {isLogin ? 'Login to Your Account' : 'Create a New Account'}
        </h2>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          {/* Name field – only for registration */}
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-text">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-text text-primary-text"
                placeholder="John Doe"
              />
            </div>
          )}
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-text">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-text text-primary-text"
              placeholder="you@example.com"
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary-text">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={isLogin ? 'current-password' : 'new-password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md bg-white/20 border border-white/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-text text-primary-text"
              placeholder="••••••••"
            />
          </div>
          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-background bg-primary-text hover:bg-primary-text/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-text"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-primary-text">
          {isLogin ? (
            <p>
              Don\'t have an account?{' '}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="font-medium text-primary-text underline hover:text-primary-text/80"
              >
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="font-medium text-primary-text underline hover:text-primary-text/80"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
