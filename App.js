/*Import packages here */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
/*Import packages here*/

/*Import project files here*/
import Calculator from './app/calculator/calculator.Contaner';
/*Import project files here*/

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView>
          <Calculator />
        </SafeAreaView>
      </>
    );
  }
}
