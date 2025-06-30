import React from 'react'

function JsonData() {
    const Admin_Json = [{"id":1, "username":"admin", "password":"admin123", "IsAdmin":"1"}]
    const Staff_Json = [{"id":1, "username":"staff", "password":"staff123", "IsStaff":"1", "Disttrict":"Bilaspur", "balance":100}]
    const User = [{"id":1, "username":"user", "password":"user123", "IaActive":"1", "staff_id":"1", "balance":100}]
  return (
    <div>JsonData</div>
  )
}

export default JsonData