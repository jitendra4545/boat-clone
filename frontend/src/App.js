import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { AllRoutes } from './Pages/AllRoutes';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box bg={'#eff4f7'}>
     
     <AllRoutes/>
    </Box>
  );
}

export default App;
