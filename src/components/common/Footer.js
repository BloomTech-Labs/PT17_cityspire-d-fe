import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <footer
      style={{ backgroundColor: 'white', textAlign: 'center', padding: '1rem' }}
    >
      Cityspire ©{date} Created by Labspt15-cityspire-g
    </footer>
  );
};

export default Footer;
