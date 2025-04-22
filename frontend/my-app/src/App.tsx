import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Singup } from './newcompo/signup'
import { Singin } from './newcompo/signin'
import { Homepage } from './newcompo/homepage'
import { InterviewPage } from './newcompo/interview'
import {LogIn} from './newcompo/company/LogIn'
import {SignUp} from './newcompo/company/SignUp'
import { JobPosting } from './newcompo/jobposting'
import { UserDashboard } from './newcompo/userDashboard'
import { Dashboard } from "./newcompo/dashBoard";
import { Test } from "./newcompo/Test";
      
function App() {
  return (
    <BrowserRouter>       
    <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/Interview" element={<InterviewPage/>}></Route>
      <Route path="/Signup" element={<Singup/>}></Route>
      <Route path="/Login" element={<Singin/>}></Route>
      <Route path="/company/Signup" element={<SignUp/>}></Route>
      <Route path="/company/Login" element={<LogIn/>}></Route>
      <Route path="/jobposting" element={<JobPosting/>}></Route>
      <Route path="/dashboard" element={<UserDashboard/>}></Route>
      <Route path="/userDashboard" element={<Dashboard />}></Route>
      <Route path="/test" element={<Test />}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
