
import './App.css';
import Newsfeed from './Components/Newsfeed/Newsfeed';
import Project from './Components/Project/Project';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Documents from './Components/Documents/Documents';
import OrganizationChart from './Components/Charts/OrganizationChart';
import Organization from './Components/Organization/Organization';
import Profile from './Components/Profile/Profile';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import LoginPage from './Components/Login/LoginPage';


function App() {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="/project" element={<Project />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="/documents" element={<Documents />} />
          {/* <Route path="/chart" element={<OrganizationChart />} /> */}
          <Route path="/organization" element={<Organization />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LoginPage />} />

        </Routes>
      </Router>


    </div>

  );
}

export default App;
