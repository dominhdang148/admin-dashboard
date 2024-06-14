import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

export function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode as { toggleColorMode: () => void; }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className='app'>
                    <main className="content">
                        <TopBar />
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
