import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/Authprovider.jsx';
import { Provider } from 'react-redux';
import { store } from '../Store/Slices/store.js';
import 'react-toastify/dist/ReactToastify.css';


const root = createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <AuthProvider>
        <div className={`dark:bg-slate-900 dark:text-white`}>
          <Provider store={store}>
            <App />
          </Provider>
        </div>
      </AuthProvider>
    </BrowserRouter>


);
