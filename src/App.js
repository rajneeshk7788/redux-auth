import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './Components/Counter';
import NavBar from './Components/NavBar';
import Auth from './Components/Auth';
import UserProfile from './Components/UserProfile';


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <NavBar />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;