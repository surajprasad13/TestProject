import "./App.css";

import { Provider } from "react-redux";

import store from "./redux";
import RouterComponent from "./routers";

function App() {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
}

export default App;
