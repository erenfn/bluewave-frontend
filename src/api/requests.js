import axios from "axios";
const server_url = "http://localhost:5000/";

export function setCredentials(name, password) {
  const credentials = { name, password };
  localStorage.setItem('credentials', JSON.stringify(credentials));
}

export function getCredentials() {
  const storedCredentials = localStorage.getItem('credentials');
  return storedCredentials ? JSON.parse(storedCredentials) : null;
}


export function login(credentials, setRes) {
  return axios
    .post(`${server_url}user/login`, credentials)
    .then((response) => {
      setRes({
        status: response.status,
        text: response.statusText
      });

      if (response.status === 200) {
        setCredentials(credentials.name, credentials.password);
      }
      return response;
    })
    .catch((err) => {
      console.log(err.response);
      setRes({
        status: err.response?.status || 500, 
        text: err.response?.data?.message || 'An error occurred' 
      });
      throw err;
    });
}

export function signup(userInfo, setRes){
  return axios
    .post(`${server_url}user/signup`, userInfo)
    .then((response) => {
      setRes({
        status: response.status,
        text: response.statusText
      });
      if (response.status === 200) {
        setCredentials(userInfo.name, userInfo.password);
      }
      return response;
    })
    .catch((err) => {
      console.log(err.response);
      setRes({
        status: err.response?.status || 500, 
        text: err.response?.data?.message || 'An error occurred' 
      });
      throw err;
    });
}


export function getEmployees(setEmployeesData) {
  const storedCredentials = getCredentials();
  if (!storedCredentials) {
    console.error('Username and password not set.');
    return Promise.reject('Username and password not set.');
  }

  const basicAuth = 'Basic ' + btoa(storedCredentials.username + ':' + storedCredentials.password);
  
  return axios.get(`${server_url}employee`, {
    headers: {
      'Authorization': basicAuth
    }
  })
  .then(res => {
    setEmployeesData(res.data);
    return res; 
  })
  .catch(error => {
    console.error('Error fetching employees:', error);
    throw error; 
  });
}

// Add an employee
export function addEmployee(employeeData) {
  const storedCredentials = getCredentials();
  if (!storedCredentials) {
    console.error('Username and password not set.');
    return Promise.reject('Username and password not set.');
  }

  const basicAuth = 'Basic ' + btoa(storedCredentials.username + ':' + storedCredentials.password);
  
  return axios.post(`${server_url}employee/add`, employeeData, {
    headers: {
      'Authorization': basicAuth 
    }
  })
  .then(response => {
    return response.data; 
  })
  .catch(error => {
    console.error('Error adding employee:', error);
    throw error; 
  });
}