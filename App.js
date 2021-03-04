/*Import packages here */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
/*Import packages here*/

/*Import project files here*/
import Calculator from './app/screen/calculator/calculator.Contaner';
import reducer from './app/reducer';
/*Import project files here*/

const store = createStore(reducer);
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView>
          <Provider store={store}>
            <Calculator />
          </Provider>
        </SafeAreaView>
      </>
    );
  }
}
