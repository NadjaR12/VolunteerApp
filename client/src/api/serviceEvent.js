// import axios from "axios";

// const serviceEvent = axios.create({
//   baseURL: "https://volunteer-project-rs.herokuapp.com/api/"
//   // withCredentials: true // => you might need this option if using cookies and sessions
// });

// const errorHandler = err => {
//   throw err;
// };

// const uploadImage = (file) => {
//   return serviceEvent
//     .post("events/upload", file)
//     .then(res => res.data)
//     .catch(errorHandler);
// };

// export default {
//   serviceEvent,
//   uploadImage
// };