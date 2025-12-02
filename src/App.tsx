import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { AdminDashboard } from './components/AdminDashboard';
import { DriverApp } from './components/DriverApp';
import { EmployeeApp } from './components/EmployeeApp';

type AppView = 'login' | 'admin' | 'driver' | 'employee';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('login');
  const [userType, setUserType] = useState<'admin' | 'driver' | 'employee'>('admin');

  const handleLogin = (type: 'admin' | 'driver' | 'employee') => {
    setUserType(type);
    if (type === 'admin') {
      setCurrentView('admin');
    } else if (type === 'driver') {
      setCurrentView('driver');
    } else {
      setCurrentView('employee');
    }
  };

  const handleLogout = () => {
    setCurrentView('login');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {currentView === 'login' && <LoginPage onLogin={handleLogin} />}
      {currentView === 'admin' && <AdminDashboard onLogout={handleLogout} />}
      {currentView === 'driver' && <DriverApp onLogout={handleLogout} />}
      {currentView === 'employee' && <EmployeeApp onLogout={handleLogout} />}
    </div>
  );
}
