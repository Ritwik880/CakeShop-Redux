import React from 'react'
import CakeContainer from './Components/CakeContainer'
import { Provider } from 'react-redux'
import store from './store'
import HooksCakeContainer from './Components/HooksCakeContainer'
import IceCreamContainer from './Components/IceCreamContainer'
const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <HooksCakeContainer /> */}
        <IceCreamContainer />
        <CakeContainer />
      </Provider>
    </>
  )
}

export default App