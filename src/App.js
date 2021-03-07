import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActionBar from "./component/ActionBar.js";
import Navbar from "./component/Navbar.js";
import SourceLearning from "./component/SourceLearning.js";
import SourceDetail from "./component/SourceDetail.js";
import { AuthContextProvider } from "./context/AuthContext.js";
import SourceContextProvider from "./context/SourceContext.js"
import StorageContextProvider from "./context/StorageContext.js";
import Home from "./component/Home";

const App = () => {
  return (
    <BrowserRouter >

        <AuthContextProvider>
          <Navbar />
          <StorageContextProvider>
            <SourceContextProvider>
              <ActionBar />
            <div className="main">
            <Switch>
              <Route exact path="/">
                <Home />  
              </Route>
              <Route path="/allSource">
                <SourceLearning />
              </Route>
              <Route path="/sourcelist/:id">
                <SourceDetail />
              </Route>
            </Switch>
            </div>
            </SourceContextProvider>
          </StorageContextProvider>
        </AuthContextProvider>

    </BrowserRouter>
  );
};

export default App;