import axios from 'axios';
import projectConfig from '../../config/project-config-sample.json';

// Example: choose baseURL from environments when added; fallback placeholder
const api = axios.create({
  baseURL: (projectConfig as any).environments?.dev?.apiUrl ?? 'http://localhost',
  timeout: 15000,
});

export default api;

