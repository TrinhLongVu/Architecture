import { Routes, Route } from "react-router-dom";

// Admin
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminUserManagement from "./pages/AdminUserManagement/AdminUserManagement";
import AdminGameManagement from "./pages/AdminGameManagement/AdminGameManagement";
import EditUser from "./pages/AdminUserManagement/EditUser";
// Layouts
import Admin from "./Layouts/Admin/Admin";
function App() {
  return (
    <>
      <Routes>
        {/* Admin */}
        <Route path="/" element={<Admin />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route
            path="/admin/user-management"
            element={<AdminUserManagement />}
          />
          <Route
            path="/admin/user-management/:username"
            element={<EditUser />}
          />
          <Route
            path="/admin/user-management/new"
            element={<EditUser />}
          />
          <Route
            path="/admin/game-management"
            element={<AdminGameManagement />}
          />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
