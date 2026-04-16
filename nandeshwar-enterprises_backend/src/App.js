import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import Schemes from "./pages/Schemes";

// Admin Pages
import Dashboard from "./pages/Admin/Dashboard";
import ManageProjects from "./pages/Admin/ManageProjects";
import ManageContacts from "./pages/Admin/ManageContacts"; // ✅ FIXED
import Login from "./pages/Admin/Login";
import SchemeDetails from "./pages/SchemeDetails";
// Components
import Navbar from "./components/Navbar";

// Route Protection
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/schemes" element={<Schemes />} />

        {/* LOGIN */}
        <Route path="/admin/login" element={<Login />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/projects"
          element={
            <PrivateRoute>
              <ManageProjects />
            </PrivateRoute>
          }
        />
        <Route path="/schemes/:id" element={<SchemeDetails />} />

        <Route
          path="/admin/contacts"
          element={
            <PrivateRoute>
              <ManageContacts />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;