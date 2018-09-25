import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Provider,  observer } from 'mobx-react';
import styled from 'styled-components/native';
import Store from './store/store';

import Navigator from './Navigator';

const Root = styled.View`
flex: 1;
`;

const StatusBarAndroid = styled.View`
height: 24;
`;


class RootContainer extends Component {
  render() {
    return (
          <Root>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
            { Platform.OS === 'android' && Platform.Version >= 20 ? <StatusBarAndroid /> : null }
            <Navigator />
          </Root>
    );
  }
}

@observer
class App extends Component {
  render() {
      return (
        <Provider store={Store}>
          <RootContainer />
        </Provider>
      );
  
    }
  }


export default App;
