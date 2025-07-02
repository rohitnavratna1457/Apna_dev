// import React, { useEffect, useState } from 'react'
// import { UserDataGet } from '../../Api/CoreApi'
// import { Table } from 'antd';
// import { FaArrowAltCircleUp } from "react-icons/fa";
// import { FaArrowAltCircleDown } from "react-icons/fa";

// function User_Apply() {
//     const id = localStorage.getItem('user_id')
//     const [user_applyout, setUser_Applyout] = useState([])
//     const [user_applyin, setUser_Applyin] = useState([])
//     const [pop, setPop] = useState(0)

//     console.log(user_applyin, '**** user_applyin ****')
//     console.log(user_applyout, '**** user_applyout ****')

//     const get = async () => {
//         const response = await UserDataGet()
//         const filter_currentuser = response.filter(user =>
//             Array.isArray(user.user_apply) &&
//             user.user_apply.some(app => app.suser_id === id)
//         );
//         // console.log(filter_currentuser, '****** filter_currentuser *****')
//         setUser_Applyout(filter_currentuser)

//         const filter_user_apply = response.filter(i => i.User_id === id)
//         const map_suser_id = filter_user_apply.map(i => i.user_apply)

//         const map_suser_id1 = map_suser_id[0].map(i => i.suser_id)

//         const filter_allUser = response.filter(i =>
//             map_suser_id1.includes(i.User_id)
//         );
//         setUser_Applyin(filter_allUser)

//         console.log(filter_allUser, map_suser_id1, '******** filter_allUser*******')
//     }
//     useEffect(() => {
//         get()
//     }, [])

//     const columns = [
//         {
//             title: 'No.',
//             key: 'index',
//             render: (text, record, index) => index + 1,
//             width: 60,
//         },
//         {
//             title: 'Firstname',
//             dataIndex: 'firstname',
//             key: 'firstname',
//         },
//         {
//             title: 'Caste',
//             dataIndex: 'caste',
//             key: 'caste',
//         },
//         {
//             title: 'Disttrict',
//             dataIndex: 'disttrict',
//             key: 'disttrict',
//         },
//         {
//             title: 'City',
//             dataIndex: 'city',
//             key: 'city',
//         },
//         // {
//         //     title: 'Contact',
//         //     dataIndex: 'contact',
//         //     key: 'contact',
//         // },
//         {
//             title: 'Action',
//             key: 'action',
//             render: (text, record) => (
//                 <a href={`tel:${record.contact}`}>
//                     <button>Call</button>
//                 </a>
//             ),
//         },
//     ];

//     return (
//         <div>
//             {/* <div>
//                 {user_applyout.map(i => (
//                     <>
//                         <p>{i.firstname}</p>
//                         <p>{i.contact}</p>

//                     </>
//                 ))}
//             </div>

//             <div>
//                 {user_applyin.map(i => (
//                     <>
//                         <p>{i.firstname}</p>
//                         <p>{i.contact}</p>
//                     </>
//                 ))}
//             </div> */}
//             <div style={{display: 'flex', height: '100px' }}>
//                 <div style={{ border: '2px solid', width: '300px', height: '70px', marginTop: '13px', marginLeft: '12%', textAlign: 'center', paddingTop: '8px', borderRadius: '10px', backgroundColor: 'green', color: 'white' }} onClick={() => setPop(0)}><FaArrowAltCircleUp style={{ fontSize: '50px' }} /></div>
//                 <div style={{ border: '2px solid', width: '300px', height: '70px', marginTop: '13px', marginLeft: '12%', textAlign: 'center', paddingTop: '8px', borderRadius: '10px', backgroundColor: 'red', color: 'white' }} onClick={() => setPop(1)}><FaArrowAltCircleDown style={{ fontSize: '50px' }} />
//                 </div>
//             </div>

//             {pop === 0 && (
//                 <div>
//                     <h3>User Apply Out</h3>
//                     <Table
//                         columns={columns}
//                         dataSource={user_applyout}
//                         rowKey={(record) => record.id || record.contact} // use unique key, fallback to contact
//                         pagination={false}
//                     />
//                 </div>
//             )}
//             {pop === 1 && (
//                 <div>
//                     <h3 style={{ marginTop: '30px' }}>User Apply In</h3>
//                     <Table
//                         columns={columns}
//                         dataSource={user_applyin}
//                         rowKey={(record) => record.id || record.contact}
//                         pagination={false}
//                     />
//                 </div>
//             )}

//         </div>
//     )
// }

// export default User_Apply

import React, { useEffect, useState } from "react";
import { UserDataGet } from "../../Api/CoreApi";
import { Table } from "antd";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import "../User_Panel/User_Apply.css"; // We'll move the styles here for cleaner code
import { useNavigate } from "react-router-dom";
function User_Apply() {
  const Navigate = useNavigate()
  const id = localStorage.getItem("user_id");
  const [user_applyout, setUser_Applyout] = useState([]);
  const [user_applyin, setUser_Applyin] = useState([]);
  const [pop, setPop] = useState(0);

  const user_role = localStorage.getItem('role')

  const permission = () => {
    if (user_role === null || user_role != 'user') {
      Navigate('/')
    }
  }

  // const get = async () => {
  //     const response = await UserDataGet();
  //     const filter_currentuser = response.filter(user =>
  //         Array.isArray(user.user_apply) &&
  //         user.user_apply.some(app => app.suser_id === id)
  //     );
  //     setUser_Applyout(filter_currentuser);

  //     const filter_user_apply = response.filter(i => i.User_id === id);
  //     const map_suser_id = filter_user_apply.map(i => i.user_apply);
  //     const map_suser_id1 = map_suser_id[0].map(i => i.suser_id);
  //     const filter_allUser = response.filter(i =>
  //         map_suser_id1.includes(i.User_id)
  //     );
  //     setUser_Applyin(filter_allUser);
  // };

  const get = async () => {
    const response = await UserDataGet();
    // Filter current user
    const filter_currentuser = response.filter(
      (user) =>
        Array.isArray(user.user_apply) &&
        user.user_apply.some((app) => app.suser_id === id)
    );
    setUser_Applyout(filter_currentuser);

    // Filter user apply
    const filter_user_apply = response.filter((i) => i.User_id === id);

    // Safe check
    if (filter_user_apply.length === 0) {
      setUser_Applyin([]); // Nothing to apply
      return;
    }

    const map_suser_id = filter_user_apply.map((i) => i.user_apply); // Array of user_apply arrays
    const userApplyArray = map_suser_id[0] || []; // Safe default to empty array if undefined

    const map_suser_id1 = userApplyArray.map((i) => i.suser_id);

    const filter_allUser = response.filter((i) =>
      map_suser_id1.includes(i.User_id)
    );
    setUser_Applyin(filter_allUser);
  };

  useEffect(() => {
    permission()
    get();
  }, []);

  const columns = [
    {
      title: "No.",
      key: "index",
      render: (text, record, index) => index + 1,
      width: 60,
    },
    {
      title: "Firstname",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Caste",
      dataIndex: "caste",
      key: "caste",
    },
    {
      title: "District",
      dataIndex: "disttrict",
      key: "disttrict",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <a href={`tel:${record.contact}`}>
          <button className="call-button">Call</button>
        </a>
      ),
    },
  ];

  return (
    <div className="user-apply-container">
      <div className="button-container">
        <div className="box green" onClick={() => setPop(0)}>
          <FaArrowAltCircleUp className="icon" />
          <div>Apply Out</div>
        </div>
        <div className="box red" onClick={() => setPop(1)}>
          <FaArrowAltCircleDown className="icon" />
          <div>Apply In</div>
        </div>
      </div>

      {pop === 0 && (
        <div className="table-container">
          <h3>User Apply Out</h3>
          <Table
            columns={columns}
            dataSource={user_applyout}
            rowKey={(record) => record.id || record.contact}
            pagination={false}
            scroll={{ x: "100%" }}
          />
        </div>
      )}

      {pop === 1 && (
        <div className="table-container">
          <h3>User Apply In</h3>
          <Table
            columns={columns}
            dataSource={user_applyin}
            rowKey={(record) => record.id || record.contact}
            pagination={false}
            scroll={{ x: "100%" }}
          />
        </div>
      )}
    </div>
  );
}

export default User_Apply;
