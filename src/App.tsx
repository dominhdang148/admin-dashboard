import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Form, Route, Routes } from "react-router-dom";
import Bar from "./screen/bar";
import Calendar from "./screen/calendar";
import Contacts from "./screen/contacts";
import Dashboard from "./screen/dashboard";
import FAQ from "./screen/faq";
import Geography from "./screen/geography";
import Sidebar from "./screen/global/Sidebar";
import Topbar from "./screen/global/Topbar";
import Invoices from "./screen/invoices";
import Line from "./screen/line";
import Pie from "./screen/pie";
import Team from "./screen/team";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as { toggleColorMode: () => void; }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
