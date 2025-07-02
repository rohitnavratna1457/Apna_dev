import React from 'react';
import { useState, useEffect } from 'react';
import { UserTransactionsGet } from '../../Api/CoreApi';
// import { useParams, Link } from 'react-router-dom'; // useParams and Link are not used
import { Table } from "antd"; // Form, Input, Button are not used
import { useNavigate } from 'react-router-dom';
// import './User_Transaction.css'; // Import the CSS file

function User_Transaction() {

    const Navigate = useNavigate()

    const admin_role = localStorage.getItem('role')

    const permission = () => {
        if (admin_role === null || admin_role != 'admin') {
            Navigate('/')
        }
    }
    const [data, setData] = useState([]);
    // console.log(data, '***** v ******'); // Consider removing for production

    const get = async () => {
        try {
            const response = await UserTransactionsGet();
            if (Array.isArray(response)) {
                setData(response);
            } else {
                console.error("UserTransactionsGet did not return an array:", response);
                setData([]); // Set to empty array on error or invalid response
                // Optionally, show a message.error() here
            }
        } catch (error) {
            console.error("Error fetching user transactions:", error);
            setData([]);
            // Optionally, show a message.error() here (if AntD 'message' is available globally or imported)
        }
    };

    useEffect(() => {
        permission()
        get();
    }, []);

    const columns = [
        { title: "ID", dataIndex: "id", key: "id", sorter: (a, b) => a.id - b.id },
        { title: "User ID", dataIndex: "User_id", key: "User_id", sorter: (a, b) => a.User_id - b.User_id }, // Assuming User_id is numeric
        { title: "Amount", dataIndex: "amount", key: "amount", sorter: (a, b) => parseFloat(a.amount) - parseFloat(b.amount), render: (text) => text != null ? parseFloat(text).toFixed(2) : 'N/A' },
        { title: "Date", dataIndex: "date", key: "date", sorter: (a, b) => new Date(a.date) - new Date(b.date), render: (text) => text ? new Date(text).toLocaleDateString() : 'N/A' }, // Format date
        { title: "Type", dataIndex: "type", key: "type", sorter: (a, b) => (a.type || "").localeCompare(b.type || "") },
        { title: "Status", dataIndex: "status", key: "status", sorter: (a, b) => (a.status || "").localeCompare(b.status || "") }
    ];

    return (
        // This outer div assumes this component is placed within a larger layout structure
        // (e.g., within a .staff-main-content or .user-tables-main-content div)
        // If User_Transaction is a top-level page on its own,
        // this div might need more comprehensive layout classes.
        <div className="user-transaction-page">
            <div className="user-transaction-table-container">
                <h3 className="user-transaction-table-title">User Transactions</h3>
                <Table
                    columns={columns}
                    dataSource={data}
                    rowKey="id"
                    bordered
                    scroll={{ x: true }} // Makes it responsive
                    className="user-transaction-table" // Optional class for very specific table tweaks
                    pagination={{ pageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }}
                />
            </div>
        </div>
    );
}

export default User_Transaction;