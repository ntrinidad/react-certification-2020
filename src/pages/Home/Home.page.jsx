import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useApi from '../../utils/hooks/useApi';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const { data } = useApi('search', 'wizeline');

  console.log(data);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <>
      <section className="navbar">
        {authenticated ? (
          <>
            <Link to="/secret"> Favorites </Link>
            <Link to="/" onClick={deAuthenticate}>
              ← Logout
            </Link>
          </>
        ) : (
          <Link to="/login">Login →</Link>
        )}
      </section>
      <section className="homepage" ref={sectionRef}>
        {/* data && data.items.map((value, index) => {
        return <img key={index} src={value.snippet.thumbnails.medium.url} alt="img"/>
      }) */}
      </section>
    </>
  );
}

export default HomePage;
