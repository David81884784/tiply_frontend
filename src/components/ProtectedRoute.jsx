import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { token } = useAuth(); // folosește contextul global

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  return token ? children : null;
}
