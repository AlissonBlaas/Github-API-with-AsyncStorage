import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Welcome from '../src/pages/Welcome';
import Repositories from '../src/pages/Repositories';
import Organizations from '../src/pages/Organizations';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        User: createMaterialBottomTabNavigator({
          Repositories,
          Organizations,
        }),
      },
      {
        initialRouteName: userLogged ? 'User' : 'Welcome',
      },
    ),
  );

export default Routes;
