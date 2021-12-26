import React from 'react';
import Layout from "./components/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CustomerList from "./pages/StaffList/CustomerList";
import Chat from "./pages/StaffList/CustomerList/Chat";
import StaffList from "./pages/StaffList";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/staff" element={<StaffList/>}/>
          <Route path="/staff/customer" element={<CustomerList/>}/>
          <Route path="/staff/customer/chat" element={<Chat/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
