import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the app

import './index.css'; // Import global CSS styles
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import App from './App'; // Import the main App component
import AuthProvider from './context/AuthProvider'; // Import AuthProvider to provide authentication context

ReactDOM.createRoot(document.getElementById('root')).render( // Create the root element and render the app
  <BrowserRouter> {/* Wrap the app with BrowserRouter to enable routing */}
    <AuthProvider> {/* Wrap the app with AuthProvider to provide authentication context */}
      <div className='dark:bg-slate-900 dark:text-white'> {/* Apply dark mode styling */}
        <App /> {/* Render the App component */}
      </div>
    </AuthProvider>
  </BrowserRouter>
);
