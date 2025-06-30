import React, { useEffect, useState } from "react";
import { Button, Card, message } from "antd";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { formatDistanceToNow, parse } from "date-fns";
import { Link } from "react-router-dom";

import {
    UserGet,
    UserUpdate,
    UserData_Array_Update,
    UserDataGet,
    UserDataUpdate,
    PostChargesGet,
    UserTotalRevenueGet,
    UserTotalRevenueUpdate,
    StaffTotalRevenueGet,
    StaffTotalRevenueUpdate,
    DevTotalRevenueGet,
    DevTotalRevenueUpdate,
    AdminTotalRevenueGet,
    AdminTotalRevenueUpdate,
} from "./Api/CoreApi";


function Reset() {
    const id = localStorage.getItem("user_id");
    const baseurl = "http://127.0.0.1:8000/";


    const [user, setUser] = useState([]); // current user
    const [alluser, setAlluser] = useState([]) // all user
    const [data, setData] = useState([]); // male/Female filterd user
    const [admin, setAdmin] = useState([]); // admin
    const [staff_Json, setStaff_Json] = useState([]); // staff
    const [developer, setDeveloper] = useState([]); // developer
    const [charges, setCharges] = useState([]); // charges
    const [userrevenue, setUserrevenue] = useState([])
    const [staffrevenue, setStaffrevenue] = useState([]); // staff revenue
    const [adminrevenue, setAdminrevwnue] = useState([]) // admin revenue
    const [devrevenue, setDevrevenue] = useState([]);

    console.log(user, '**** user ******')
    console.log(alluser, '**** alluser ******')
    console.log(devrevenue, '**** devrevenue ******')
    console.log(userrevenue, '**** userreveue ******')
    console.log(data, '**** data ******')
    console.log(admin, '**** admin ******')
    console.log(staff_Json, '**** staff_Json ******')
    console.log(developer, '**** developer ******')
    console.log(charges, '**** charges ******')
    console.log(staffrevenue, '**** staffrevenue ******')
    console.log(adminrevenue, '**** adminrevenue ******')


    const user_get = async () => {
        const response = await UserGet();

        const alluser_filter = response.filter(i => i.role === 'user')
        setAlluser(alluser_filter)

        const admin_filter = response.filter(i => i.role === 'admin')
        setAdmin(admin_filter)

        const staff_filter = response.filter(i => i.role === 'staff')
        setStaff_Json(staff_filter)

        const developer_filter = response.filter(i => i.role === 'developer')
        setDeveloper(developer_filter)

        const current_user = response.filter((i) => i.id === id);
        setUser(current_user); // current

        const response_UserDataGet = await UserDataGet();
        const user_geder = current_user.map((i) => i.gender);
        const user_geder_str = String(user_geder)
        if (user_geder_str == "Male") {
            const filter_female = response_UserDataGet.filter((i) => i.gender === "Female");
            setData(filter_female);
        } else {
            const filter_male = response_UserDataGet.filter((i) => i.gender === "Male");
            setData(filter_male);
        }

        const response_PostCharges = await PostChargesGet();
        setCharges(response_PostCharges);

        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
        const year = today.getFullYear();
        const formattedDate = `${year}-${month}-01`; // ✅ Corrected format (No extra quotes)
        const response_setStaffrevenue = await StaffTotalRevenueGet();
        const current_staff_revenue = response_setStaffrevenue.filter((i) => i.month === formattedDate);
        setStaffrevenue(current_staff_revenue);


        const response_setUserrevwnue = await UserTotalRevenueGet();
        const current_User_revenue = response_setUserrevwnue.filter((i) => i.month === formattedDate);
        setUserrevenue(current_User_revenue);

        const response_setAdminrevwnue = await AdminTotalRevenueGet();
        const current_admin_revenue = response_setAdminrevwnue.filter((i) => i.month === formattedDate);
        setAdminrevwnue(current_admin_revenue);

        const response_setDevTotalRevenueGet = await DevTotalRevenueGet();
        const current_dev_revenue = response_setDevTotalRevenueGet.filter(
            (i) => i.month === formattedDate
        );
        setDevrevenue(current_dev_revenue);

    };

    useEffect(() => {
        user_get();
    }, []);


    const update = async()=>{
        
    }

    // const alert_popup = (i) => {
    //     if (window.confirm("Are you sure?")) {
    //         distribute(i);
    //     }
    // };

    return (
        <div>Reset</div>
    )
}

export default Reset