import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/Protected";
import Specialitities from "./Pages/Specialities";
import Speciality from "./Pages/Speciality";
import Course from "./Pages/Course";
import Courses from "./Pages/Courses";
import Teachers from "./Pages/Teachers";
import Fragment from "./Pages/Fragment";
import PublicRoute from "./Routes/Public";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import NotFound from "./Pages/404";
import Header from "./Organims/Header";
import './App.css'; 
import "../styles/styles.scss";
const App = () => {
  /* {
    "especialidades": [
      {
        "id": 1,
        "name": "json-server"
      },
      {
        "id": 2,
        "name": "Typescript"
      },
      {
        "id": 3,
        "name": "Typescript"
      },
      {
        "id": 4,
        "name": "Typescript"
      },
      {
        "id": 5,
        "name": "Typescript"
      },
      {
        "id": 6,
        "name": "Typescript"
      }
    ],
    "profesores": [
      {
        "id": 1,
        "name": "Humberto García",
        "country": "Venezuela",
        "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg"
      },
      {
        "id": 2,
        "name": "Daniel Moya",
        "country": "Venezuela",
        "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg"
      },
      {
        "id": 3,
        "name": "Daniel Moya",
        "country": "Venezuela",
        "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg"
      },
      {
        "id": 4,
        "name": "Daniel Moya",
        "country": "Venezuela",
        "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg"
      },
      {
        "id": 5,
        "name": "Daniel Moya",
        "country": "Venezuela",
        "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg"
      },
      {
        "id": 6,
        "name": "Daniel Moya",
        "country": "Venezuela",
        "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg"
      },
      {
        "id": 7,
        "name": "Daniel Moya",
        "country": "Venezuela",
        "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg"
      },
      {
        "id": 8,
        "name": "Daniel Moya",
        "country": "Venezuela",
        "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg"
      },
      {
        "id": 9,
        "name": "Daniel Moya",
        "country": "Venezuela",
        "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg"
      },
      {
        "id": 10,
        "name": "Daniel Moya",
        "country": "Venezuela",
        "picture": "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg"
      }
    ],
    "cursos": [
      {
        "id": 1,
        "name": "typicode"
      },
      {
        "id": 2,
        "name": "typescript"
      },
      {
        "id": 3,
        "name": "Angular"
      },
      {
        "id": 4,
        "name": "Angular"
      },
      {
        "id": 5,
        "name": "Angular"
      },
      {
        "id": 6,
        "name": "Angular"
      },
      {
        "id": 7,
        "name": "Angular"
      },
      {
        "id": 8,
        "name": "Angular"
      },
      {
        "id": 9,
        "name": "Angular"
      },
      {
        "id": 10,
        "name": "Angular"
      },
      {
        "id": 11,
        "name": "Angular"
      }
    ],
    "login": [
      {
        "email": "humbertodev14@gmail.com",
        "password": "21312",
        "id": 1
      },
      {
        "email": "humbertodev14@gmail.com",
        "password": "213",
        "id": 2
      },
      {
        "email": "humbertodev14@gmail.com",
        "password": "132",
        "id": 3
      }
    ],
    "signup": [],
    "posts": [
      {
        "id": 1,
        "author": "Jose Millan",
        "title": "Ayuda con CSS grid Urgente!!",
        "fecha": "20/3/2021 a las 10:45 AM",
        "content": "daojdojsadfhdsoahf suahfushdfuhsuaifhusdhaf fshfusdhfushufh suhdfshfhsodiahfopisdha oshfosahfihsfhsuhf opshfopishfohsifhiosdh oshfioshafiohsdfhsoiahfiop sahfdioshfoishfoihsiofh oiashfoipsafhposhafopihs osdhfioshafiophsafoisa sopafh oasihf asoifhp aspofhapsofdih poaihsfdpohaspfh poashf poashf poashf"
      },
      {
        "id": 2,
        "author": "Jose Vergara",
        "title": "Ayuda con CSS grid Urgente!!",
        "fecha": "10/3/2021 a las 9:45 PM",
        "content": "daojdojsadfhdsoahf suahfushdfuhsuaifhusdhaf fshfusdhfushufh suhdfshfhsodiahfopisdha oshfosahfihsfhsuhf opshfopishfohsifhiosdh oshfioshafiohsdfhsoiahfiop sahfdioshfoishfoihsiofh oiashfoipsafhposhafopihs osdhfioshafiophsafoisa sopafh oasihf asoifhp aspofhapsofdih poaihsfdpohaspfh poashf poashf poashf"
      },
      {
        "id": 3,
        "author": "Gabriela Millan",
        "title": "Ayuda con JAVA Urgente!!",
        "fecha": "20/3/2020 a las 10:45 PM",
        "content": "daojdojsadfhdsoahf suahfushdfuhsuaifhusdhaf fshfusdhfushufh suhdfshfhsodiahfopisdha oshfosahfihsfhsuhf opshfopishfohsifhiosdh oshfioshafiohsdfhsoiahfiop sahfdioshfoishfoihsiofh oiashfoipsafhposhafopihs osdhfioshafiophsafoisa sopafh oasihf asoifhp aspofhapsofdih poaihsfdpohaspfh poashf poashf poashf"
      },
      {
        "id": 4,
        "author": "Lenny Perez",
        "title": "Ayuda con HTML Urgente!!",
        "fecha": "10/2/2021 a las 11:25 AM",
        "content": "daojdojsadfhdsoahf suahfushdfuhsuaifhusdhaf fshfusdhfushufh suhdfshfhsodiahfopisdha oshfosahfihsfhsuhf opshfopishfohsifhiosdh oshfioshafiohsdfhsoiahfiop sahfdioshfoishfoihsiofh oiashfoipsafhposhafopihs osdhfioshafiophsafoisa sopafh oasihf asoifhp aspofhapsofdih poaihsfdpohaspfh poashf poashf poashf"
      }
    ]
  } */
  
  return (
    <div>
      
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/especialidades"
          element={
            <ProtectedRoute>
              <Specialitities />
            </ProtectedRoute>
          }
        />
        <Route
          path="/especialidades/:id"
          element={
            <ProtectedRoute>
              <Speciality />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cursos"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cursos/:id"
          element={
            <ProtectedRoute>
              <Course />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profesores"
          element={
            <ProtectedRoute>
              <Teachers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/clase/:id"
          element={
            <ProtectedRoute>
              <Fragment />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* Default Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
