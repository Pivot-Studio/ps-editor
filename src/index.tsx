import ReactDom from 'react-dom/client';
import App from './App';
import { setupLanguage } from './config/setup';
setupLanguage();
ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
