import Hero from "./components/Interface/Hero"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicOnlyRoute from "./utils/PublicOnlyRoute";
import PrivateOnlyRoute from "./utils/PrivateOnlyRoute";
import StationScreen from "./components/Station/StationScreen"
import JailScreen from "./components/Jail/JailScreen";
import OfficeScreen from "./components/Office/OfficeScreen";
import Login from "./components/pages/SignIn"
import Signup from "./components/pages/SignUp"
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import SnackbarManager from "./context/SnackBarManager";



const App = () => {
//   const authenticated = async () => {
//     try {
//         const response = await fetch('http://localhost:8000/checkAuthentication', {
//             method: 'POST',
//             credentials:'include',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
            
//         });
//         if (response.status === 200) {
//             const data = await response.json();
//             console.log(data);
//             console.log('Authenticated');
//         } else if (response.status === 307) {
//             navigate('/login')
//         }
//     } catch (error) {
//         console.error('Failed to fetch', error);
//     }
// }
  return (
    <ThemeProvider theme={theme}>
    <SnackbarManager />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicOnlyRoute Component={Hero} />} />
        <Route path="/station" element={<PublicOnlyRoute Component={StationScreen} />} />
        <Route path="/jail" element={<PrivateOnlyRoute Component={JailScreen} />} />
        <Route path="/office" element={<PrivateOnlyRoute Component={OfficeScreen} />} />
        <Route path="/login" element={<PublicOnlyRoute Component={Login} />} />
        <Route path="/signup" element={<PublicOnlyRoute Component={Signup} />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
