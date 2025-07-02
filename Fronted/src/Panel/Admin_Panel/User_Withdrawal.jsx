import React, { useState, useEffect } from "react";
import {
  UserGet,
  UserUpdate,
  UserTransactionsGet,
  UserTransactionsUpdate,
} from "../../Api/CoreApi";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table, message } from "antd";
import { FaUser } from "react-icons/fa6";

function User_Withdrawal() {
  const Navigate = useNavigate();
  const [staff, setStaff] = useState([]);
  const [data, setData] = useState([]);
  const [add, setAdd] = useState([]);
  console.log(staff, "****** data ********");

  const admin_role = localStorage.getItem('role')

  const permission = () => {
    if (admin_role === null || admin_role != 'admin') {
      Navigate('/')
    }
  }

  const get = async () => {
    try {
      const staff_response = await UserGet();
      setStaff(staff_response);

      const response = await UserTransactionsGet();
      const filter_user = response.filter((i) => i.status === "pending");
      setData(filter_user);
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
      const user_id = value.id;
      const values = { status: "accept" };
      const response = await UserTransactionsUpdate(user_id, values);
      const user_pendings_filter = response.filter(
        (i) => i.status === "pending"
      );
      setData(user_pendings_filter);
      message.success("Withdrawal request accepted");
    } catch (error) {
      message.error("Failed to accept withdrawal");
      console.error("Error accepting withdrawal:", error);
    }
  };

  const reject = async (value) => {
    try {
      const user_id = value.user_id;
      const transaction_id = value.id;
      const transaction_amount = value.amount;
      const values = { status: "reject" };

      const response = await UserTransactionsUpdate(transaction_id, values);
      const user_pendings_filter = response.filter(
        (i) => i.status === "pending"
      );
      setData(user_pendings_filter);

      if (values.status === "reject") {
        const user_filter = staff.filter((i) => i.id === user_id);
        const user_balance = user_filter.map((i) => i.balance);
        const add = parseInt(user_balance) + parseInt(transaction_amount);
        const add_balance = { balance: add };

        await UserUpdate(user_id, add_balance);
      }
      message.success("Withdrawal request rejected");
    } catch (error) {
      message.error("Failed to reject withdrawal");
      console.error("Error rejecting withdrawal:", error);
    }
  };

  const log_out = () => {
    localStorage.clear();

    // localStorage.removeItem('user_id');
    Navigate("/Admin_Login");
  };

  const columns = [
    {
      title: "ID",
      key: "index",
      width: 80,
      render: (text, record, index) => index + 1,
    },

    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
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
    <div>
      {/* <div style={{ width: "180px", height: '680px', backgroundColor: 'white', position: 'fixed', marginTop: '50px' }}>
                <Link to='/Admin_Panel'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}

                    >
                        Dashboard
                    </Button>
                </Link>
                <Link to='/Staff_Tables'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Staff
                    </Button>
                </Link>
                <Link to='/User_Tables'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        User
                    </Button>
                </Link>
                <Link to='/Transaction'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Transaction
                    </Button>
                </Link>
                <Link to='/Staff_Withdrawal'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Withdrawal
                    </Link>
                </Link>
                <Link to='/Post_Commission'>
                    <Button
                        style={{
                            textAlign: "center",
                            color: "black",
                            borderRadius: "0px",
                            width: "100%",
                        }}
                    >
                        Commisions
                    </Button>
                </Link>
                <Button
                    style={{
                        textAlign: "center",
                        color: "black",
                        borderRadius: "0px",
                        width: "100%",
                    }}
                    onClick={log_out}
                >
                    Log Out
                </Button>
            </div> */}
      <div style={{ marginLeft: "0px", paddingTop: "70px" }}>
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
    </div>
  );
}

export default User_Withdrawal;
