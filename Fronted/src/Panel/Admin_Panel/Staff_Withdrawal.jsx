import React, { useState, useEffect } from "react";
import {
  UserGet,
  UserUpdate,
  StaffTransactionsGet,
  StaffTransactionsUpdate,
} from "../../Api/CoreApi";
import { Button, Table, message } from "antd";
import { useNavigate } from "react-router-dom";

function Staff_Withdrawal() {
  const Navigate = useNavigate()
  const admin_role = localStorage.getItem('role')

  const permission = () => {
    if (admin_role === null || admin_role != 'admin') {
      Navigate('/')
    }
  }
  const [staff, setStaff] = useState([]);
  const [data, setData] = useState([]);

  const get = async () => {
    try {
      const response = await StaffTransactionsGet();
      const filter = response.filter((i) => i.status === "pending");
      setData(filter);

      const staff_response = await UserGet();
      setStaff(staff_response);
    } catch (error) {
      message.error("Failed to fetch data");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    permission()
    get();
  }, []);

  const accept = async (value) => {
    try {
      const staff_id = value.id;
      const values = { status: "accept" };
      const response = await StaffTransactionsUpdate(staff_id, values);
      const staff_pendings_filter = response.filter(
        (i) => i.status === "pending"
      );
      setData(staff_pendings_filter);
      message.success("Withdrawal request accepted");
    } catch (error) {
      message.error("Failed to accept withdrawal");
      console.error("Error accepting withdrawal:", error);
    }
  };

  const reject = async (value) => {
    try {
      const staff_id = value.staff_id;
      const transaction_id = value.id;
      const transaction_amount = value.amount;
      const values = { status: "reject" };

      const response = await StaffTransactionsUpdate(transaction_id, values);
      const staff_pendings_filter = response.filter(
        (i) => i.status === "pending"
      );
      setData(staff_pendings_filter);

      if (values.status === "reject") {
        const staff_filter = staff.filter((i) => i.id === staff_id);
        const staff_balance = staff_filter.map((i) => i.balance);
        const add = parseInt(staff_balance) + parseInt(transaction_amount);
        const add_balance = { balance: add };

        await UserUpdate(staff_id, add_balance);
      }
      message.success("Withdrawal request rejected");
    } catch (error) {
      message.error("Failed to reject withdrawal");
      console.error("Error rejecting withdrawal:", error);
    }
  };

  const columns = [
    {
      title: "ID",
      key: "index",
      width: 80,
      render: (text, record, index) => index + 1,
    },
    {
      title: "Staff ID",
      dataIndex: "staff_id",
      key: "staff_id",
      width: 100,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 120,
      render: (amount) => `₹${parseFloat(amount).toFixed(2)}`,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 150,
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 100,
      render: (type) => (
        <span className="withdrawal-status pending">{type}</span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (status) => (
        <span className={`withdrawal-status ${status}`}>{status}</span>
      ),
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      width: 100,
    },
    {
      title: "UPI ID",
      dataIndex: "upi_id",
      key: "user_id",
      width: 100,
    },
    {
      title: "Bank AC",
      dataIndex: "bank_account",
      key: "bank_account",
      width: 100,
    },
    {
      title: "Actions",
      key: "actions",
      width: 200,
      render: (_, record) => (
        <div className="withdrawal-action-buttons">
          <Button
            className="withdrawal-action-btn approve"
            onClick={() => accept(record)}
          >
            Accept
          </Button>
          <Button
            className="withdrawal-action-btn reject"
            onClick={() => reject(record)}
          >
            Reject
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="withdrawal-table-container">
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        bordered
        scroll={{ x: "max-content" }}
        pagination={{
          pageSize: 10,
          position: ["bottomCenter"],
          showSizeChanger: false,
        }}
      />
    </div>
  );
}

export default Staff_Withdrawal;
