// import React from 'react';
// import { Table } from 'antd';
// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     filters: [
//       {
//         text: 'Joe',
//         value: 'Joe',
//       },
//       {
//         text: 'Category 1',
//         value: 'Category 1',
//       },
//       {
//         text: 'Category 2',
//         value: 'Category 2',
//       },
//     ],
//     filterMode: 'tree',
//     filterSearch: true,
//     onFilter: (value, record) => record.name.startsWith(value),
//     width: '30%',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     sorter: (a, b) => a.age - b.age,
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     filters: [
//       {
//         text: 'London',
//         value: 'London',
//       },
//       {
//         text: 'New York',
//         value: 'New York',
//       },
//     ],
//     onFilter: (value, record) => record.address.startsWith(value),
//     filterSearch: true,
//     width: '40%',
//   },
// ];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];
// const onChange = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };
// const UserBalance = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
// export default UserBalance;
import React, { useState } from "react";
import { Table, Input } from "antd";

const { Search } = Input;

const columns = [
  {
    title: "ID No",
    dataIndex: "id",
    key: "id",
    width: "10%",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    filters: [
      { text: "Joe", value: "Joe" },
      { text: "Category 1", value: "Category 1" },
      { text: "Category 2", value: "Category 2" },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: "30%",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    filters: [
      { text: "London", value: "London" },
      { text: "New York", value: "New York" },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: "40%",
  },
];

const initialData = [
  { key: "1", id: 101, name: "John Brown", age: 32, address: "New York No. 1 Lake Park" },
  { key: "2", id: 102, name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
  { key: "3", id: 103, name: "Joe Black", age: 32, address: "Sydney No. 1 Lake Park" },
  { key: "4", id: 104, name: "Jim Red", age: 32, address: "London No. 2 Lake Park" },
  { key: "5", id: 105, name: "Rohit", age: 32, address: "London No. 2 Lake Park" },
  { key: "6", id: 106, name: "Nil", age: 32, address: "London No. 2 Lake Park" },
  { key: "7", id: 107, name: "Bhupesh", age: 32, address: "London No. 2 Lake Park" },
  { key: "8", id: 108, name: "Ankit", age: 28, address: "Mumbai No. 3 Lake Park" },
  { key: "9", id: 109, name: "Suresh", age: 35, address: "Delhi No. 5 Lake Park" },
  { key: "10", id: 110, name: "Manoj", age: 40, address: "Chennai No. 4 Lake Park" },
  { key: "11", id: 111, name: "Vijay", age: 31, address: "Pune No. 6 Lake Park" },
  { key: "12", id: 112, name: "Karan", age: 29, address: "Hyderabad No. 7 Lake Park" },
  { key: "13", id: 113, name: "Mahesh", age: 41, address: "Kolkata No. 8 Lake Park" },
  { key: "14", id: 114, name: "Amit", age: 33, address: "Bangalore No. 9 Lake Park" },
  { key: "15", id: 115, name: "Yash", age: 27, address: "Jaipur No. 10 Lake Park" },
  { key: "16", id: 116, name: "Rajesh", age: 36, address: "Indore No. 11 Lake Park" },
  { key: "17", id: 117, name: "Dinesh", age: 38, address: "Surat No. 12 Lake Park" },
];

const UserBalance = () => {
  const [filteredData, setFilteredData] = useState(initialData);

  // Handle search
  const handleSearch = (value) => {
    const filtered = initialData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div
      style={{
        width: "900px",
        height: "525px",
        overflow: "auto",
        border: "1px solid #ddd",
        padding: "10px",
        marginLeft: "50px",
        marginTop: "50px",
      }}
    >
      {/* Search Box Above Table */}
      <Search
        placeholder="Search by name"
        allowClear
        enterButton="Search"
        onSearch={handleSearch}
        style={{ marginBottom: "10px", width: "400px",marginLeft:'20px',height:"30px" }}
      />

      {/* Table with ID Column and Pagination */}
      <Table
        columns={columns}
        dataSource={filteredData}
        scroll={{ y: 400 }}
        pagination={{ pageSize: 15 }}
      />
    </div>
  );
};

export default UserBalance;
