import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Login from './components/Layout/Login';

function App() {
  return (
    <Fragment>
      <Header />
      <Login />
    </Fragment>
  );
}

export default App;
