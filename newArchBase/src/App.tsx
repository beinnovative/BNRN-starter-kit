import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import ApplicationNavigator from '@/Navigators/Application'
import { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-notifications'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ApplicationNavigator />
        </PersistGate>
       </Provider>
  </QueryClientProvider>
)

const MainApp = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
      <Toast ref={ref => (global['toast'] = ref)} />
    </GestureHandlerRootView>
  );
};

export default MainApp
