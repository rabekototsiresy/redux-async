import React from 'react'
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCream from './components/HooksIceCream';
import NewCakeContainer from './components/NewCakeContainer';
import OwnProps from './components/OwnProps';
import UsersContainer from './components/UsersContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <UsersContainer />
        {/* <OwnProps  />
        <IceCreamContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <HooksIceCream />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  )
}

export default App
