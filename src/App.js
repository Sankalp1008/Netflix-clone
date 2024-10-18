// import logo from './logo.svg';

import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore";


function App() {
  
  return (
    <div className="">
      <Provider store={appStore}>
      {/* <Header/> */}
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
