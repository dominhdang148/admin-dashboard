import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./screen/dashboard";
import Topbar from "./screen/global/Topbar";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as { toggleColorMode: () => void; }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
