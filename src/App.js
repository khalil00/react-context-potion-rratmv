import React, { createContext } from 'react';
import { getUsers } from './services/userService';
import PotionManagement from './pages/PotionManagement';
import LoginForm from './pages/LoginForm';
import Header from './components/Header';
import usePersistedState from './hooks/usePersistedState';

export const UserContext = createContext(null);

const App = () => {
  const [selectedUser, setSelectedUser] = usePersistedState(
    undefined,
    'selectedUser'
  );
  const users = getUsers();

  return (
    <UserContext.Provider value={selectedUser}>
      <div className="container-fluid">
        <Header
          logOut={() => setSelectedUser(undefined)}
          currentUser={selectedUser}
        />
        <div className="container">
          {selectedUser ? (
            <PotionManagement />
          ) : (
            <LoginForm availableUsers={users} onLogin={setSelectedUser} />
          )}
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default App;
