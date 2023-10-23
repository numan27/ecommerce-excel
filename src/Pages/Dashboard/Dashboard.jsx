import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
// import AdminNavbar from "../../components/Navbars/AdminNavbar";
import AdminNav from "../../components/Sidebar/AdminNav";
import AdminFooter from "../../components/Footers/AdminFooter";

const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto '>
                <Sidebar />
                <div className='grow bg-slate-100'>
                    <AdminNav />
                    <div className='lg:mx-5 mx-0 sm:mt-0 mt-20 lg:px-8 px-2 py-8'
                    >
                    {children}
                    </div>
                </div>
            </div>
            <AdminFooter />
        </>
    )
}

export default DashboardLayout