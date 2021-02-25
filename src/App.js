import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActionBar from "./component/ActionBar.js";
import Navbar from "./component/Navbar.js";
import SourceLearning from "./component/SourceLearning.js";
import SourceList from "./component/SourceList.js";
import { AuthContextProvider } from "./context/AuthContext.js";
import SourceContextProvider from "./context/SourceContext.js"

const App = () => {
  return (
    <BrowserRouter >

        <AuthContextProvider>
          <Navbar />
          
          <SourceContextProvider>
            <ActionBar />
          <div className="main">
          <Switch>
            <Route exact path="/">
                <SourceLearning />
            </Route>
            <Route path="/sourcelist/:id">
              <SourceList />
            </Route>
          </Switch>
          </div>
          </SourceContextProvider>
          
        </AuthContextProvider>

    </BrowserRouter>
  );
};

export default App;