import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';

import axios from 'axios';

const Home = () => {
  const [stats, setStats] = useState({ totalUrls: 0, activeUrls: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/stats');
        setStats(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStats();
  }, []);

  return (
    <>
      <div className="container">
        <div className="card">
          <h1 className="title">URL Shortener</h1>
          <Link to="/create" className="btn">Create New</Link>
        </div>
      </div>
    </>
  );
};

export default Home;