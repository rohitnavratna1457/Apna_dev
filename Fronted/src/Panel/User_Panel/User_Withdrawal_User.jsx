import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, message, Table } from "antd";
import { Link } from "react-router-dom";
import {
  UserGet,
  UserDataGet,
  UserTransactionsGet,
  UserTransactionsPost,
  UserUpdate,
} from "../../Api/CoreApi";
import { FaWhatsapp, FaRupeeSign } from "react-icons/fa";

function User_Withdrawal_User() {
  const Navigate = useNavigate();

  const id = localStorage.getItem("user_id");
  const int_id = String(id);
  console.log(int_id, "** int_id *******");
  const [data, setData] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar

  console.log(data, "******* data *******");

  const user_role = localStorage.getItem('role')

  const permission = () => {
    if (user_role === null || user_role != 'user') {
      Navigate('/')
    }
  }

  const get = async () => {
    const response = await UserGet();
    const staff_filter = response.filter((i) => i.id === int_id);
    const response1 = await UserDataGet();
    const staff_filter1 = response1.filter((i) => i.User_id === int_id);
    console.log(staff_filter1, "****** response1 *******");

    const combine = { ...staff_filter[0], ...staff_filter1[0] }
    console.log(combine, "****** combine *******");
    setData([combine]);

    const transaction_response = await UserTransactionsGet();
    const transaction_filter = transaction_response.filter(
      (i) => i.user_id === int_id
    );
    setTransaction(transaction_filter.reverse());
  };

  useEffect(() => {
    permission()
    get();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    // Initial check
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Withdrawal = async (i) => {
    console.log(i, "********** i ***********");
    if (i.balance > 0) {
      const id = i.User_id;
      const balance = i.balance;
      const bank_account = i.bank_account;
      const upi_id = i.upi_id;
      const contact = i.contact;
      const reduce = { balance: 0 };
      const Transaction_data = {
        user_id: id,
        amount: balance,
        upi_id: upi_id,
        contact: contact,
        bank_account: bank_account,
        type: "withdrawal",
      };
      await UserTransactionsPost(Transaction_data);

      const staff_response = await UserUpdate(id, reduce);
      const staff_filter = staff_response.filter((i) => i.id === int_id);
      setData(staff_filter.reverse());

      // Refresh transactions after withdrawal
      const transaction_response = await UserTransactionsGet();
      const transaction_filter = transaction_response.filter(
        (i) => i.user_id === int_id
      );
      setTransaction(transaction_filter.reverse());

      message.success("Withdrawal successful");
    } else {
      message.error("Withdrawal failed: balance is zero or less");
    }
  };

  const log_out = () => {
    localStorage.clear();

    // localStorage.removeItem("user_id");
    Navigate("/User_Login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      {/* Topbar */}
      <div className="top-navbar">
        <div className="top-navbar-left">
          <Button onClick={toggleSidebar} className="sidebar-toggle-button">
            ☰
          </Button>
          <Link to="/Home_Page_wLog" className="navbar-title">
            Ristey
          </Link>
        </div>

        <div className="top-navbar-right">
          {int_id ? (
            <Link to="/User_Panel" className="navbar-link">
              Profile
            </Link>
          ) : (
            <div className="navbar-auth-links">
              <Link to="/User_Reg/885695" className="navbar-link">
                Sign Up
              </Link>
              <Link to="/User_Login" className="navbar-link">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Static Sidebar (Always visible, no toggle) */}
      <div className={`sidebar_open ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-buttons">
          <Link to="/User_Panel">
            <Button className="sidebar-button">Dashboard</Button>
          </Link>
          <Link to="/User_Added_User">
            <Button className="sidebar-button">User</Button>
          </Link>
          <Link to="/User_Recharge">
            <Button className="sidebar-button">Recharge</Button>
          </Link>
          <Link to="/User_Transaction_User">
            <Button className="sidebar-button">Transaction</Button>
          </Link>
          <Link to="/User_Withdrawal_User">
            <Button className="sidebar-button">Withdrawal</Button>
          </Link>
          <Button className="sidebar-button" onClick={log_out}>
            Logout
          </Button>
        </div>
      </div>
      {/* Main Content */}
      <br /> <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {data.map((i) => (
          <div
            key={i.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              padding: "20px",
              margin: "20px auto",
              maxWidth: "600px",
              width: "90%", // Responsive width
              textAlign: "center",
            }}
          >
            {/* Content Wrapper */}

            <div
              style={{
                width: "400px",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              <FaRupeeSign style={{ fontSize: "40px", marginBottom: "10px" }} />
              <p style={{ fontSize: "40px", margin: "10px 0" }}>{i.balance}</p>
              <Button
                style={{
                  margin: "10px 0",
                  marginLeft: "10px",
                  marginRight: "30px",
                }}
                onClick={() => Withdrawal(i)}
              >
                Withdrawal
              </Button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `http://localhost:3000/${i.refer}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "18px",
                  color: "#25D366",
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                <FaWhatsapp style={{ fontSize: "22px" }} />
                <span style={{ marginLeft: "8px" }}>Share & Earn</span>
              </a>
            </div>
          </div>
        ))}

        {/* Transaction Table */}
        <div style={{ width: "100%", maxWidth: "1000px", marginTop: "40px" }}>
          <Table
            columns={[
              { title: "ID", dataIndex: "id", key: "id" },
              // { title: "user_id", dataIndex: "user_id", key: "user_id" },
              { title: "amount", dataIndex: "amount", key: "amount" },
              { title: "date", dataIndex: "date", key: "date" },
              { title: "type", dataIndex: "type", key: "type" },
              { title: "status", dataIndex: "status", key: "status" },
            ]}
            dataSource={transaction}
            rowKey="id"
            bordered
            scroll={{ x: true }}
          />
        </div>
      </div>
    </div>
  );
}

export default User_Withdrawal_User;
