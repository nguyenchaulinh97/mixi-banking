import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { AnimatePresence } from "framer-motion";
import "./App.css";
import { AuthProvider } from "./contexts/auth";
import useAppTheme from "./contexts/theme";
import Dashboard from "./pages/Dashboard";
import GlobalStyles from "./styles/global";
import * as themes from "./styles/themes";
import { debugData } from "./utils/debugData";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App = () => {
  const { currentTheme } = useAppTheme();

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AuthProvider>
        <AnimatePresence>
          <Router>
            <Routes>
              {/* <Route path="/" Component={Default} /> */}
              {/* <Route path="/" Component={SignIn} /> */}
              <Route path="/" Component={Dashboard} />
            </Routes>
            <GlobalStyles />
          </Router>
        </AnimatePresence>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
