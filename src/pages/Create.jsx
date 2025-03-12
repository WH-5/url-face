import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';


const Create = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [shortUrl, setShortUrl] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://www.whsite.asia/api/url', {
        original_url: originalUrl ,
        custom_code: customCode || null,
        duration: null
      });
      if (response.data.code === 200) {
        setShortUrl(response.data.short_url.startsWith('http') ? response.data.short_url : `http://${response.data.short_url}`);
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>New</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label>URL:</label>
              <input
                type="text"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                required
                className="input"
              />
            </div>
            <div className="form-group">
              <label>Code:</label>
              <input
                type="text"
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
                className="input"
              />
            </div>
            <button type="submit" className="btn">Save</button>
          </form>
          {error ? (
            <div className="error">出错了！</div>
          ) : shortUrl ? (
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          ) : null}
        </div>
      </div>
      
    </>
  );
};

export default Create;
