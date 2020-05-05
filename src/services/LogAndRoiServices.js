import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
});

http.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.assign('/login')
    }

    return Promise.reject(error);
  }
)

//User
const login = ({ email, password }) => http.post('/login', { email, password });
const logout = () => http.post('/logout');
const register = data => http.post('/users', data);
const deleteUser = (userId) => http.delete(`/users/${userId}`)

//Projects
const getProjects = (user) => http.get(`/user/${user.id}/projects`);
const getProjectDetail = (projectId) => http.get(`/projects/${projectId}`);
const createProject = (data, user) => http.post(`/${user.id}/projects/new`, data);
const updateProject = (data, projectId) => http.patch(`/projects/${projectId}`, data);
const deleteProject = (projectId) => http.delete(`/projects/${projectId}`);

//Logs
const getLogs = (projectId) => http.get(`/${projectId}/logs`);
const getLogDetail = (logId) => http.get(`/${logId}/detail`);
const createLog = (data, projectId) => http.post(`/${projectId}/logs/new`, data);
const updateLog = (data, logId) => http.patch(`/logs/${logId}`, data);
const deleteLog = (logId) => http.delete(`/logs/${logId}/delete`);

export default {
  login,
  logout,
  register,
  deleteUser,
  getProjects,
  getProjectDetail,
  createProject,
  updateProject,
  deleteProject,
  getLogs,
  getLogDetail,
  createLog,
  updateLog,
  deleteLog
};