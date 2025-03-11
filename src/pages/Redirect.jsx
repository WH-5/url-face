import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Redirect = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await axios.get(`/${code}`);
        window.location.href = response.data.original_url;
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    };

    fetchUrl();
  }, [code, navigate]);

  return (
    <div className="container">
      <div className="loading">
        <div className="spinner"></div>
        <div>Redirecting...</div>
      </div>
    </div>
  );
};

export default Redirect;