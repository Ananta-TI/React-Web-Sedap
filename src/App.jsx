import { useState, useEffect, Suspense, lazy } from 'react';
import './assets/tailwind.css';
// import Login from './pages/Auth/Login';
// import Register from './pages/Auth/Register';
// import Forgot from './pages/Auth/Forgot';
import { BreadcrumbProvider } from './context/BreadcrumbContext';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import AuthLayout from './layouts/AuthLayout';
import GuestLayout from './layouts/GuestLayout';
import Loading from './components/Loading'; // ← ini dia
import ErrorPage from './components/ErrorPage.jsx'; // ⬅ import error page
import ErrorBoundary from './components/ErrorBoundary.jsx';
import GuestPage from './pages/GuestPage.jsx';
import UserPage from './pages/UserPages.jsx';
import CustPage from './pages/CustomerPages.jsx';
import FoodPage from './pages/FoodPages.jsx';
import Login from './pages/Auth/Login.jsx';
import SplashCursor from './components/SplashCursor.jsx';
import Customers1 from './pages/Customers1.jsx';
import User1 from './pages/User1.jsx';
import Home from './pages/hero.jsx';

// ananta 

// Lazy loaded pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Orders = lazy(() => import('./pages/Orders'));
// const Customers = lazy(() => import('./pages/Customers'));
const Error400 = lazy(() => import('./pages/Error400'));
const Error401 = lazy(() => import('./pages/Error401'));
const Error403 = lazy(() => import('./pages/Error403'));
// const Login = lazy(() => import('./pages/Auth/LoginPages'));
const Hero = lazy(() => import('./pages/hero.jsx'));
const Register = lazy(() => import('./pages/Auth/Register'));
const Forgot = lazy(() => import('./pages/Auth/Forgot'));
// const Users1 = lazy(() => import('./pages/User1'));
// const Customers1 = lazy(() => import('./pages/Customers1'));

// const GuestPage = lazy(() => import('./pages/GuestPage'));


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('src/Data/orders.json');
      const data = await response.json();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await fetch('src/Data/customers.json');
      const data = await response.json();
      setCustomers(data);
    };
    fetchCustomers();
  }, []);

  const filteredOrders = orders.filter(order =>
    order['Customer Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    order['Order ID'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    order['Status'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    order['Total Price'].toString().includes(searchTerm) ||
    order['Order Date'].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCustomers = customers.filter(customer =>
    customer['Customer Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer['Customer ID'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer['Email'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer['Phone'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer['Loyalty'].toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  
  return (
    
    <BreadcrumbProvider>
    <ErrorBoundary>


      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<GuestLayout />}>
          
            <Route path="/guest" element={<GuestPage />} />
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/user" element={<UserPage />} />
            <Route path="/Customers" element={<CustPage customers={filteredCustomers} />} />
            <Route path="/Food" element={<FoodPage />} />
            
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders orders={filteredOrders} />} />
            <Route path="/customers1" element={<Customers1 customers={filteredCustomers} />} />
            <Route path="/users1" element={<User1 />} />
            <Route path="/error-400" element={<Error400 />} />
            <Route path="/error-401" element={<Error401 />} />
            <Route path="/error-403" element={<Error403 />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />

        

        </Routes>
      </Suspense>
    </ErrorBoundary>
    </BreadcrumbProvider>
  );
}

export default App;
