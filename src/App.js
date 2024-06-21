// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { ThemeContext, ThemeContextProvider } from './components/ThemeContext';
import Sidebar from './components/Sidebar';
import TableComponent from './components/TableComponent';
import ChartComponent from './components/ChartComponent';
import CalendarComponent from './components/CalendarComponent';
import KanbanBoard from './components/KanbanBoard';
import UserProfileCard from './components/UserProfileCard';
import Notifications from './components/Notifications';
import './App.css';

const columns = [
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
];

const data = [
  { name: 'John', age: 25 },
  { name: 'Doe', age: 42 },
  // ...more data
];

const App = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Container style={{ marginLeft: 240, padding: '20px' }}>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Notifications />
          </header>
          <Routes>
            <Route path="/" element={<UserProfileCard />} />
            <Route path="/tables" element={<TableComponent columns={columns} data={data} />} />
            <Route path="/charts" element={<ChartComponent />} />
            <Route path="/calendar" element={<CalendarComponent />} />
            <Route path="/kanban" element={<KanbanBoard />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

const ThemedApp = () => (
  <ThemeContextProvider>
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </ThemeContextProvider>
);

export default ThemedApp;
