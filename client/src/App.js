import React from 'react';
import AppNavBar from './components/AppNavBar';
import FishList from './components/FishList';
import FishModal from './components/FishModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavBar />
      <Container>
      <FishModal />
      <FishList />
      </Container>
    </div>
    </Provider>
  );
}

export default App;
