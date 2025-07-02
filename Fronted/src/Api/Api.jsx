// import axios from "axios"  // AXIOS mediator connection between frontend to backend
// import * as siteConfig from "../Config/Config"  // import config.jsx

// const Api = axios.create({
//     baseURL: siteConfig.default.apiBaseURL, // check base url
//     timeout: siteConfig.default.apiTimeout, // check connection wait time
//     xsrfHeaderName: "X-CSRFToken", // security protocol
//     xsrfCookieName: "csrftoken", // security protocol
//     credentials: true, // autontication
// })

// Api.interceptors.request.use(  // promise to frontend to backend wait
//     (config) => {
//         return config // if the data was success fully send then return config
//     },
//     (error) =>{
//         Promise.reject(error)
//     }
// );

// Api.interceptors.response.use( // promise to backend to frontend wait
//     (response) => {
//         return response; // if the data was success fully send then return config
//     },
//     (error) => {
//         Promise.reject(error)
//     }
// );

// export default Api;

// //next step coreapi.jsx


// // Import axios for HTTP requests
// import axios from "axios";
// // Import site configuration
// import * as siteConfig from "../Config/Config";

// // ✅ Create Axios Instance
// const Api = axios.create({
//   baseURL: siteConfig.default.apiBaseURL, // Base URL from config
//   timeout: siteConfig.default.apiTimeout || 5000, // Default timeout 5 sec
// });

// // ✅ Attach Token to Requests (Except Login & Refresh)
// Api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("access_token"); // Get token
//     if (token && !config.url.includes("/") && !config.url.includes("/token/refresh/")) {
//       config.headers.Authorization = `Bearer ${token}`; // Attach token
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // ✅ Function to Refresh Token
// const refreshToken = async () => {
//   const refresh_token = localStorage.getItem("refresh_token");
//   if (refresh_token) {
//     try {
//       const { data } = await axios.post(`${siteConfig.default.apiBaseURL}/api/token/refresh/`, {
//         refresh: refresh_token,
//       });
//       localStorage.setItem("access_token", data.access); // ✅ Update token
//       return data.access;
//     } catch (error) {
//       console.error("Token refresh failed!");
//       localStorage.clear();
//       window.location.href = "/User_Login"; // Redirect to login
//     }
//   }
//   return null;
// };

// // ✅ Auto Retry Failed Request on 401
// Api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const newToken = await refreshToken(); // Get new token
//       if (newToken) {
//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return Api(originalRequest); // Retry with new token
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default Api; // ✅ Export API instance



import axios from "axios";
import * as siteConfig from "../Config/Config";

// ✅ Create Axios Instance
const Api = axios.create({
  baseURL: siteConfig.default.apiBaseURL,
  timeout: siteConfig.default.apiTimeout || 5000,
});

// ✅ Attach Access Token to Requests
Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (
      token &&
      !["/api/token/", "/api/token/refresh/"].some((url) =>
        config.url.endsWith(url)
      )
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Function to Refresh Token
const refreshToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  if (refresh_token) {
    try {
      const response = await axios.post(
        `${siteConfig.default.apiBaseURL}/api/token/refresh/`,
        { refresh: refresh_token }
      );
      const newAccessToken = response.data.access;
      localStorage.setItem("access_token", newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error("❌ Refresh token expired or invalid. Redirecting to login.");
      localStorage.clear();
      window.location.href = "/"; // 🔁 Force redirect
    }
  } else {
    localStorage.clear();
    window.location.href = "/"; // 🔁 No refresh token available
  }
  return null;
};

// ✅ Auto Retry Failed Request on 401 Unauthorized
Api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshToken();
      if (newToken) {
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return Api(originalRequest); // 🔁 Retry original request
      }
    }

    // ✅ Optional: Handle 403 (Forbidden) or other errors
    if ([401, 403].includes(error.response?.status)) {
      localStorage.clear();
      window.location.href = "/"; // 🔁 Final fallback
    }

    return Promise.reject(error);
  }
);

export default Api;
