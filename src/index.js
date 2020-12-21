import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import rootReducer from "./Store/reducer";
import counterReducer from "./Store/reducers/counter";
import resultReducer from "./Store/reducers/result";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[MiddleWare]", action);
      const result = next(action);
      console.log("[MiddleWare next state]", store.getState());
    };
  };
};
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
