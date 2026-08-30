import { Routes, Route, Navigate } from "react-router-dom"; 
import RootLayout from "./layouts/RootLayout"; 
import ProtectedRoute from "./routes/ProtectedRoute"; 
import LoginPage from "./pages/LoginPage"; 
import SignupPage from "./pages/SignupPage"; 
import LibraryPage from "./pages/LibraryPage"; 
 
function App() { 
  return ( 
    <Routes> 
      <Route element={<RootLayout />}> 
        {/* Public Routes */} 
        <Route path="/" element={<Navigate to="/library" replace />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
 
        {/* Protected Routes */} 
        <Route element={<ProtectedRoute />}> 
          <Route path="/library" element={<LibraryPage />} /> 
        </Route> 
      </Route> 
    </Routes> 
  ); 
} 
 
export default App