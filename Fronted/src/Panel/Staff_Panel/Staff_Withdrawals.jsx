import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, message, Table } from "antd";
import { Link } from "react-router-dom";
import {
  UserGet,
  UserUpdate,
  StaffTransactionsPost,
  StaffTransactionsGet,
} from "../../Api/CoreApi";
// FaUser is not used in the current JSX
import { FaRupeeSign } from "react-icons/fa";
import "./Staff_Withdrawals.css"; // Import the CSS file

function Staff_Withdrawals() {
  const Navigate = useNavigate();

  const staffId = localStorage.getItem("user_id"); // Renamed for clarity
  // const int_id = String(staffId); // Comparison will handle this

  const [staffData, setStaffData] = useState([]); // For current staff's own data (like balance)
  const [transactions, setTransactions] = useState([]); // For their transaction history
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchData = async () => {
    if (!staffId) {
      message.warn("Staff ID not found. Please log in.");
      return;
    }
    try {
      // Fetch staff's own details (including balance)
      const allUsersResponse = await UserGet();
      const currentStaff = allUsersResponse.filter(
        (i) => String(i.id) === String(staffId)
      );
      setStaffData(currentStaff); // Expecting an array, though likely only one item

      // Fetch staff's transactions
      const transaction_response = await StaffTransactionsGet();
      const transaction_filter = transaction_response.filter(
        (i) => String(i.staff_id) === String(staffId)
      );
      setTransactions(transaction_filter.reverse()); // Show newest first
    } catch (error) {
      message.error("Failed to fetch data.");
      console.error("Error in fetchData:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [staffId]);

  const handleWithdrawal = async (staffInfo) => {
    if (parseFloat(staffInfo.balance) > 0) {
      const staffRecordId = staffInfo.id;
      const currentBalance = parseFloat(staffInfo.balance);

      try {
        // 1. Create transaction record
        const transactionData = {
          staff_id: staffRecordId,
          amount: currentBalance,
          type: "withdrawal",
          // status: 'pending' // or whatever default status
        };
        await StaffTransactionsPost(transactionData); // Assuming this API returns the new transaction or confirms

        // 2. Update staff balance to 0
        const updatedBalanceData = { balance: 0 };
        await UserUpdate(staffRecordId, updatedBalanceData);

        message.success("Withdrawal successful! Balance updated.");
        fetchData(); // Re-fetch all data to reflect changes
      } catch (error) {
        message.error("Withdrawal process failed. Please try again.");
        console.error("Error during withdrawal:", error);
      }
    } else {
      message.error("Insufficient balance for withdrawal.");
    }
  };

  const log_out = () => {
    localStorage.removeItem("user_id");
    message.success("Logged out successfully.");
    Navigate("/Staff_Login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const transactionColumns = [
    {
      title: "ID",
      key: "id",
      render: (text, record, index) => index + 1,
      width: 130,
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
    { title: "Type", dataIndex: "type", key: "type", width: 100 },
    { title: "Status", dataIndex: "status", key: "status", width: 100 },
  ];

  return (
    <div className="staff-layout-container">
      <div className="app-header">
        <Link to="/Home_Page_wLog" className="header-logo-link">
          <p className="header-logo-text">Ristey</p>
        </Link>
        <div className="header-right-content">
          <div className="header-nav-wrapper">
            {staffId ? (
              <Link to="/Staff_Panel" className="header-nav-link profile-link">
                <p>Profile</p>
              </Link>
            ) : (
              <div className="header-auth-links">
                <Link to="/User_Reg/885695" className="header-nav-link">
                  <p>Sign Up</p>
                </Link>
                <Link to="/User_Login" className="header-nav-link">
                  <p>Login</p>
                </Link>
              </div>
            )}
          </div>
          <Button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            ☰
          </Button>
        </div>
      </div>

      <div className={`app-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <Link to="/Staff_Panel">
          <Button className="sidebar-btn">Dashboard</Button>
        </Link>
        <Link to="/Staff_Added_User">
          <Button className="sidebar-btn">User</Button>
        </Link>
        <Link to="/Staff_Transactions">
          <Button className="sidebar-btn">Transaction</Button>
        </Link>
        <Link to="/Staff_Withdrawals">
          <Button className="sidebar-btn active">Withdrawal</Button>
        </Link>
        <Button className="sidebar-btn" onClick={log_out}>
          Log Out
        </Button>
      </div>

      <div className="main-content staff-withdrawals-content">
        <h1 className="page-title">Withdrawals</h1>

        {staffData.length > 0 ? (
          staffData.map((staffInfo) => (
            <div key={staffInfo.id} className="balance-withdrawal-section">
              <div className="balance-card">
                <FaRupeeSign className="balance-icon" />
                <span className="balance-amount">
                  {parseFloat(staffInfo.balance).toFixed(2)}
                </span>
              </div>
              <Button
                type="primary"
                danger // Makes it red, suitable for withdrawal
                className="withdrawal-button"
                onClick={() => handleWithdrawal(staffInfo)}
                disabled={parseFloat(staffInfo.balance) <= 0} // Disable if no balance
              >
                Withdraw Full Balance
              </Button>
            </div>
          ))
        ) : (
          <p className="loading-text">Loading staff balance...</p> // Or some placeholder
        )}

        <div className="transactions-history-section">
          <h2 className="section-subtitle">Withdrawal History</h2>
          <div className="transactions-table-container">
            {" "}
            {/* Re-use table container style */}
            <Table
              columns={transactionColumns}
              dataSource={transactions.filter((t) => t.type === "withdrawal")} // Show only withdrawals here
              rowKey="id"
              bordered
              scroll={{ x: "max-content" }}
              className="transactions-data-table" // Re-use table style
              pagination={{ pageSize: 5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff_Withdrawals;
