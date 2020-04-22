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

//Projects
const getProjects = (user) => http.get(`/user/${user.id}/projects`);
const createProject = (data, user) => http.post(`/${user.id}/projects/new`, data);
const updateProject = (data, project) => http.patch(`/projects/${project.id}`, data);
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
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getLogs,
  getLogDetail,
  createLog,
  updateLog,
  deleteLog
};