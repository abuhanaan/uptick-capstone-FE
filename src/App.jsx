import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { Jobs } from "./pages/Jobs/Jobs";
import { NotFound } from "./components/NotFound";
import { JobDetails } from "./pages/Jobs/section/JobDetails";
import { SubmitApplication } from "./components/SubmitApplication";
import { SoftwareEngineering } from "./pages/programs/SoftwareEngineering";
import { UiUxDesign } from "./pages/programs/UiUxDesign";
import { ProjectProduct } from "./pages/programs/ProjectProduct";
import Login from "./pages/admin/Login";
import AdminHome from "./pages/admin/home/Home";
import AdminJobs from "./pages/admin/jobs/Jobs";
import { CreateJobView } from "./pages/admin/jobs/CreateJobView";
import Programs from "./pages/admin/programs/Programs";
import ProgramDetails from "./pages/admin/programs/ProgramDetails";
import CreateProgram from "./pages/admin/programs/CreateProgram";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/jobs" element={<AdminJobs />} />
        <Route path="/admin/jobs/create" element={<CreateJobView />} />

        <Route path="/admin/programs" element={<Programs />} />
        <Route path="/admin/programs/create" element={<CreateProgram />} />
        <Route path="/admin/programs/:id" element={<ProgramDetails />} />
        
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/submit-application" element={<SubmitApplication />} />
        <Route
          path="/programs/software-engineering"
          element={<SoftwareEngineering />}
        />
        <Route path="/programs/ui-ux-design" element={<UiUxDesign />} />
        <Route
          path="/programs/project-management"
          element={<ProjectProduct />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
