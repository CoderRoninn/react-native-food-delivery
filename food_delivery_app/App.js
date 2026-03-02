import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeNavigator from './src/navigator/HomeNavigator';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;



