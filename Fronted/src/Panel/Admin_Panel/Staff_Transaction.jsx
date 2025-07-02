import React from 'react'
import { useState, useEffect } from 'react'
import { StaffTransactionsGet, StaffTransactionsUpdate } from '../../Api/CoreApi'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Form, Input, Button, Table } from "antd";



function Staff_Transaction() {
  const Navigate = useNavigate()

  const admin_role = localStorage.getItem('role')

  const permission = () => {
    if (admin_role === null || admin_role != 'admin') {
      Navigate('/')
    }
  }

  const [data, setData] = useState([])
  const get = async () => {
    const response = await StaffTransactionsGet()
    setData(response)
  }

  useEffect(() => {
    permission()
    get()
  }, [])

  // const log_out = () => {
  //   localStorage.removeItem('Staff')
  //   Navigate('/Admin_Login')
  // }
  return (
    <div>

      <Table
        columns={[
          { title: "ID", dataIndex: "id", key: "id" },
          { title: "staff_id", dataIndex: "staff_id", key: "staff_id" },
          { title: "amount", dataIndex: "amount", key: "amount" },
          { title: "date", dataIndex: "date", key: "date" },
          {
            title: "type",
            dataIndex: "type",
            key: "type",
          },
          {
            title: "status",
            dataIndex: "status",
            key: "status",
          },
        ]}
        dataSource={data}
        rowKey="id"
        bordered
        scroll={{ x: true }} // Makes it responsive
      />
    </div>
  )
}

export default Staff_Transaction