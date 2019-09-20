import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import '../src/config/ReactotronConfig';

import createNavigator from './routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');
    this.setState({
      userChecked: true,
      userLogged: !!username, //!! troca para booleano, se o calor existir, ele transforma em true, se nao ,transforma em false
    });
  }

  render() {
    const {userChecked, userLogged} = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}
