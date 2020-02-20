import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '_helpers';
import Patient from './Patient';

class App extends React.Component {
  render() {
    return (
        <Provider store={store}  >
          <Patient />
        </Provider>
    );
  }
}


export default App;
