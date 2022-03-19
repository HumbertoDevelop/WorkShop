import React, { useCallback, useEffect } from 'react';
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
import Footer from "./Organims/Footer";
import "./App.css";
import Cart from "./Pages/Cart";
import { useDispatch } from "react-redux";
import { bulkCart } from "../Redux/actionCreators";

const App = () => {
  const dispatch = useDispatch();
  const updateCart = useCallback(
      () => {
          dispatch(bulkCart());
      },
      [dispatch, bulkCart],
  );

  useEffect(() => {
    updateCart();
  }, [updateCart]);

  return (
    <div  >
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
          path="/carrito"
          element={
            <ProtectedRoute>
              <Cart />
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
      <Footer />
    </div>
  );
};

export default App;
