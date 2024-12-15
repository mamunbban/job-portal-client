import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Hone/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/sign in/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/Hone/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import Adjob from "../pages/AddJob/Adjob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplication from "../pages/ViewApplication/ViewApplication";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>router not found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/jobs/:id',
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: '/jobApply/:id',
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: '/addJob',
          element: <PrivateRoute><Adjob></Adjob></PrivateRoute>
        },
        {
          path: '/myPostedJob',
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path: '/myApplications',
          element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path: '/viewApplication/:job_id',
          element: <PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router