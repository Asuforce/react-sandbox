import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "rootReducer";

const logger = createLogger({
  collapsed: true,
  diff: true
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
