import './App.css';

import { Stack, Box } from '@mui/material';

import Navbar from './components/Navbar';
import TitleBar from './components/TitleBar';
import SearchBar from './components/SearchBar';
import SortFilter from './components/SortFilter';
import Courses from './components/Courses';

function App() {
  return (
    <div name='body'>
      <Navbar/>
      <Box name='main-content' sx={{
        ml: '5rem',
        boxSizing: 'border-box',
        mb: 20,
      }}>
        <TitleBar/>
        <Stack sx={{
          mt: '40px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <SearchBar/>
          <SortFilter/>
          <Courses/>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
