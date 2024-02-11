import './App.css';
import { Stack, Box } from '@mui/material';


import Navbar from './components/Navbar';
import TitleBar from './components/TitleBar';
import SearchBar from './components/SearchBar';
import SortFilter from './components/SortFilter';
import CourseCard from './components/CourseCard';

function App() {
  return (
    <body name='body'>
      <Navbar/>
      <Box name='main-content' sx={{
        ml: '5rem',
        boxSizing: 'border-box',
        // backgroundColor: 'green'
      }}>
        <TitleBar/>
        <SearchBar/>
        <SortFilter/>
        <CourseCard/>
      </Box>
    </body>
  );
}

export default App;
