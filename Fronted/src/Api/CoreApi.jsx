import { message } from "antd";
import API from "./Api"; // import Api.jsx


/////////////////////////////// User /////////////////////////////////////////////
const accessToken = localStorage.getItem("access_token");

//////////////////////  WL /////////////////////////////////////////

export const UserRegPost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "UserReg_wl/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const UserRegGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "UserReg_wl/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserRegUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `UserReg_wl/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};


export const VerifyOtp = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "verify-otp/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};





export const UserDataGetwt = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "UserDataReg_wl/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserDataPostwt = async (values) => {
  const response = await API.post(
    "UserDataReg_wl/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const UserDataUpdatewl = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `UserDataReg_wl/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserImage_wt = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "UserImages_wl/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

///////////////////////////////////////////////////////


export const UserPost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "UserRegister/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const UserGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "UserRegister/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `UserRegister/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const User_Array_Update = async (id, value) => {
  // for array of object //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `UserRegister/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `UserRegister/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserLogin = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(values);
  const response = await API.post(
    "UserLogin/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    { headers: { "Content-Type": "application/json"} }
  ).catch(
    // handler - backend url
    (err) => message.error("Login Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const User_forget_password = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(values);
  const response = await API.post(
    "send-email/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const User_send_otp = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(values);
  const response = await API.post("send-otp/", values, {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${accessToken}`
    },
  }).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const User_verify_otp = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(values);
  const response = await API.post(
    "verify-otp/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};


////////////////////////////////// UserData ///////////////////////////////////////////

export const UserDataPost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "UserData/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const UserDataGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "UserData/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserDataUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `UserData/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserData_Array_Update = async (id, value) => {
  // for array of object //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `UserData/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserDataRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `UserData/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};


// /////////////////////////////// Admin /////////////////////////////////////////////

// export const AdminPost = async (values) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   // console.log(values)
//   const response = await API.post(
//     "AdminRegister/",
//     values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("Registration Failed")
//   );
//   console.log(values);
//   return response ? response.data : {};
// };

// export const AdminGet = async () => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   const response = await API.get(
//     "AdminRegister/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("getdata Failed")
//   );
//   return response ? response.data : {};
// };

// export const AdminUpdate = async (id, value) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   console.log(value, "***** value ***** ");
//   const response = await API.put(
//     `AdminRegister/${id}`,
//     value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("getdata Failed")
//   );
//   return response ? response.data : {};
// };

// export const AdminRemove = async (id) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   console.log(id, "********* delete **********");
//   const response = await API.delete(
//     `AdminRegister/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("getdata Failed")
//   );
//   return response ? response.data : {};
// };

// export const AdminLogin = async (values) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   console.log(values);
//   const response = await API.post(
//     "AdminLogin/",
//     values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("Registration Failed")
//   );
//   console.log(values);
//   return response ? response.data : {};
// };

// /////////////////////////////// Staff /////////////////////////////////////////////

// export const StaffPost = async (values) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   // console.log(values)
//   const response = await API.post(
//     "StaffRegister/",
//     values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("Registration Failed")
//   );
//   console.log(values);
//   return response ? response.data : {};
// };

// export const StaffGet = async () => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   const response = await API.get(
//     "StaffRegister/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("getdata Failed")
//   );
//   return response ? response.data : {};
// };

// export const StaffUpdate = async (id, value) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   console.log(value, "***** value ***** ");
//   const response = await API.put(
//     `StaffRegister/${id}`,
//     value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("getdata Failed")
//   );
//   return response ? response.data : {};
// };

// export const StaffRemove = async (id) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   console.log(id, "********* delete **********");
//   const response = await API.delete(
//     `StaffRegister/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("getdata Failed")
//   );
//   return response ? response.data : {};
// };

// export const StaffLogin = async (values) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   console.log(values);
//   const response = await API.post(
//     "StaffLogin/",
//     values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("Registration Failed")
//   );
//   console.log(values);
//   return response ? response.data : {};
// };

/////////////////////////////// UserImages /////////////////////////////////////////////

export const UserImagesPost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "UserImages/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    { headers: { "Content-Type": "multipart/form-data",
Authorization: `Bearer ${accessToken}` } }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const UserImagesGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "UserImages/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    { headers: { "Content-Type": "application/json",
Authorization: `Bearer ${accessToken}` } }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserImagesUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `UserImages/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    { headers: { "Content-Type": "application/json",
Authorization: `Bearer ${accessToken}` } }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserImagesRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `UserImages/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    { headers: { "Content-Type": "application/json",
Authorization: `Bearer ${accessToken}` } }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

// /////////////////////////////// Developer /////////////////////////////////////////////

// export const DeveloperPost = async (values) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   // console.log(values)
//   const response = await API.post(
//     "DeveloperRegister/",
//     values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "multipart/form-data" } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("Registration Failed")
//   );
//   console.log(values);
//   return response ? response.data : {};
// };

// export const DeveloperGet = async () => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   const response = await API.get(
//     "DeveloperRegister/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("getdata Failed")
//   );
//   return response ? response.data : {};
// };

// export const DeveloperUpdate = async (id, value) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   console.log(value, "***** value ***** ");
//   const response = await API.put(
//     `DeveloperRegister/${id}`,
//     value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "multipart/form-data" } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("getdata Failed")
//   );
//   return response ? response.data : {};
// };

// export const DeveloperRemove = async (id) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   console.log(id, "********* delete **********");
//   const response = await API.delete(
//     `DeveloperRegister/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("getdata Failed")
//   );
//   return response ? response.data : {};
// };

// export const DeveloperLogin = async (values) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   console.log(values);
//   const response = await API.post(
//     "DeveloperLogin/",
//     values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     { headers: { "Content-Type": "application/json",
// Authorization: `Bearer ${accessToken}` } }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("Registration Failed")
//   );
//   console.log(values);
//   return response ? response.data : {};
// };

/////////////////////////////// PostCharges /////////////////////////////////////////////

export const PostChargesPost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "PostCharges/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const PostChargesGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "PostCharges/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const PostChargesUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `PostCharges/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const PostChargesRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `PostCharges/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

/////////////////////////////// UserTotalRevenue /////////////////////////////////////////////

export const UserTotalRevenuePost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "UserTotalRevenue/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const UserTotalRevenueGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "UserTotalRevenue/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserTotalRevenueUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `UserTotalRevenue/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserTotalRevenueRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `UserTotalRevenue/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

/////////////////////////////// AdminTotalRevenue /////////////////////////////////////////////

export const AdminTotalRevenuePost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "AdminTotalRevenue/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const AdminTotalRevenueGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "AdminTotalRevenue/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const AdminTotalRevenueUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `AdminTotalRevenue/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const AdminTotalRevenueRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `AdminTotalRevenue/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

/////////////////////////////// StaffTotalRevenue /////////////////////////////////////////////

export const StaffTotalRevenuePost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "StaffTotalRevenue/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const StaffTotalRevenueGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "StaffTotalRevenue/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const StaffTotalRevenueUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `StaffTotalRevenue/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const StaffTotalRevenueRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `StaffTotalRevenue/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

/////////////////////////////// DevTotalRevenue /////////////////////////////////////////////

export const DevTotalRevenuePost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "DevTotalRevenue/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const DevTotalRevenueGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "DevTotalRevenue/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const DevTotalRevenueUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `DevTotalRevenue/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const DevTotalRevenueRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `DevTotalRevenue/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};
/////////////////////////////// StaffTransactions /////////////////////////////////////////////

export const StaffTransactionsPost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "StaffTransactions/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const StaffTransactionsGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "StaffTransactions/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const StaffTransactionsUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `StaffTransactions/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const StaffTransactionsRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `StaffTransactions/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};


/////////////////////////////// UserTransactions /////////////////////////////////////////////

export const UserTransactionsPost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "UserTransactions/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const UserTransactionsGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "UserTransactions/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserTransactionsUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `UserTransactions/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const UserTransactionsRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `UserTransactions/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

// ///////////////////////// USER STATE ////////////////////

export const User_StatePost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "state/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const User_StateGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "state/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const User_StateUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `state/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const User_StateRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `state/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

// ///////////////////////// USER CASTE ////////////////////

export const User_CastePost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "caste/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};

export const User_CasteGet = async () => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  const response = await API.get(
    "caste/", // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const User_CasteUpdate = async (id, value) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(value, "***** value ***** ");
  const response = await API.put(
    `caste/${id}`,
    value, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};

export const User_CasteRemove = async (id) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  console.log(id, "********* delete **********");
  const response = await API.delete(
    `caste/${id}`, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("getdata Failed")
  );
  return response ? response.data : {};
};




// export const SubscriberPost = async (values) => {
//   //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
//   console.log("Service Data",values)
//   const response = await API.post(
//     "subscribe/",
//     values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
//     {
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer ${accessToken}`
//       }
//     }
//   ).catch(
//     // handler - backend url
//     (err) => message.error("Registration Failed")
//   );
//   console.log(values);
//   return response ? response.data : {};
// };





export const  SubscriberPost = async (values) => {
  //empLogin -- function name , async -- wait for time , (value)-- form data varriable send by EmpLogin function
  // console.log(values)
  const response = await API.post(
    "subscribe/",
    values, // await - wait , Api - component (promise) , post - define a operation, api/Reg - backend Post path , value - parameter to  send data
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).catch(
    // handler - backend url
    (err) => message.error("Registration Failed")
  );
  console.log(values);
  return response ? response.data : {};
};
