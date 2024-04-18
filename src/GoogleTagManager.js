import React, { useEffect } from 'react';

const GoogleTagManager = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-1KK26BQQTK');
  }, []);

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1KK26BQQTK"></script>
    </>
  );
};

export default GoogleTagManager;
