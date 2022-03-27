import { Provider } from "react-redux";
import { store,persistor } from "./store/store";
import {RutasFile} from './routers/RutasFile'
import React, { Component }  from 'react';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  return (
    <Provider store={ store }>
         <PersistGate persistor={persistor}>
     <RutasFile/>
     </PersistGate>
     </Provider>
  );
}

export default App;
