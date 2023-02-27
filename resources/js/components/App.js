import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Dashboard/Dashboard";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {ProtectedRoute} from "./ProtectedRoute/ProtectedRoute";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {CssBaseline} from "@mui/material";

const themeBackground = createTheme({
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
            //   backgroundColor: "#FAACA8",
              backgroundImage: `radial-gradient(27% 185%, #F9F6F1 0%, #D7D0C5 100%)`,
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            },
          },
        },
    }
});

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <SWRConfig>
                    <ThemeProvider theme={themeBackground}>
                        <CssBaseline />
                        <Route path={'/app/login'}>
                            <Login/>
                        </Route>

                        <Route path={'/app/register'}>
                            <Signup/>
                        </Route>

                        <ProtectedRoute
                            exact path={'/app/dashboard'}
                            component={Dashboard}
                        />
                    </ThemeProvider>
                </SWRConfig>

                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar
                    style={{ fontSize: 14, fontWeight: 'bold' }}
                    limit={1}
                />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
