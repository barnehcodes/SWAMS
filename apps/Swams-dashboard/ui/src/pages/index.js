import React from 'react';
import AuthModal from '../component/AuthModal';
import Header from '../component/header';
import Sidebar from '../component/sidebar';
import Dashboard from '../component/Dashboard';
import NotificationSystem from '../component/NotificationSystem';
import '../css/styles.css';

const Home = () => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [currentLanguage, setCurrentLanguage] = React.useState('en');

  React.useEffect(() => {
    // Simulate a logged-in user for testing purposes
    setCurrentUser({ name: 'Test User', role: 'admin' });
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const user = await authenticateUser(username, password);
      setCurrentUser(user);
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  const authenticateUser = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'password') {
          resolve({ name: 'Admin User', role: 'admin' });
        } else if (username === 'staff' && password === 'password') {
          resolve({ name: 'Staff User', role: 'staff' });
        } else if (username === 'resident' && password === 'password') {
          resolve({ name: 'Resident User', role: 'resident' });
        } else {
          reject('Invalid credentials');
        }
      }, 1000);
    });
  };

  const handleLanguageChange = (e) => {
    setCurrentLanguage(e.target.value);
  };

  return (
    <NotificationSystem>
      <div className="App">
        {!currentUser ? (
          <AuthModal onLogin={handleLogin} />
        ) : (
          <div className="app-wrapper" id="appWrapper">
            <Sidebar />
            <div className="main-content">
              <Header
                currentUser={currentUser}
                currentLanguage={currentLanguage}
                onLanguageChange={handleLanguageChange}
              />
              <main className="main-content">
                <Dashboard />
              </main>
            </div>
          </div>
        )}
      </div>
    </NotificationSystem>
  );
};

export default Home;