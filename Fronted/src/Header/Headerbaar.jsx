import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserGet } from '../Api/CoreApi';

function Headerbaar() {
  const [data, setData] = useState([]);
  console.log(data, '******* data ******')

  const user_id = localStorage.getItem('user_id');
  console.log(user_id, 'user_id')
  const get = async () => {
    try {
      const response = await UserGet();
      const filter_data = response.filter(i => String(i.id) === String(user_id));
      setData(filter_data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div style={{ border: '2px solid', width: '100%', height: '55px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
      {/* <p>Header</p> */}
      <Link to='/Home_Page_wLog' style={{ marginTop: '0px', marginLeft: '5%' }}><p style={{ fontSize: '30px', color: 'white' }}>Ristey</p></Link>
      {data.length < 0 && (
        <>
          <Link to='/User_Reg/111111' style={{ marginTop: '13px', marginLeft: '78%' }}><p style={{ fontSize: '15px', color: 'white' }}>Sign Up</p></Link>
          <Link to='/User_Login' style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '30px' }}><p style={{ fontSize: '15px', color: 'white' }}>Login</p></Link>
        </>
      )}
      {user_id !== null && (
        <Link to='/User_panel' style={{ marginTop: '13px', marginLeft: '80%' }}><p style={{ fontSize: '15px', color: 'white' }}>Profile</p></Link>
      )}


    </div>
  )
}

export default Headerbaar