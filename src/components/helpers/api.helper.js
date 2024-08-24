const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

console.log(REACT_APP_API_URL);
const apiRoutes = {
  LOGIN: "/login",
  REGISTER: "/register",
  NEW_PASSWORD: "/new-password",
  RESET_PASSWORD: "/reset-password",
  QUERY_FORM: "/query-form",
  CONVERT: `${REACT_APP_API_URL}/api/v1/bsc/convert`,
  FILE_UPLOAD_EXCEL: "/api/v1/bsc/convert-to-excel",
  FILE_UPLOAD_EXCEL_ALL: "/api/v1/bsc/convert-to-excel-all",
  FILE_UPLOAD_CSV: "/api/v1/bsc/convert-to-csv",
  FILE_UPLOAD_CSV_ALL: "/api/v1/bsc/convert-to-csv-all",
};
export default apiRoutes;
