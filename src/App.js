import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import { UserList } from './Registrationdetails';
import { createMuiTheme } from '@material-ui/core/styles';
import StudentList from './StudentList';
import EvaluationList from './EvaluationList';
import { Users1List } from './Evaluationdetails';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        color: 'black',
      },
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
    palette: {

    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0D0D0D',
    },
  },
});


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  
     <Admin dashboard={StudentList} theme={theme} dataProvider={dataProvider}> 
       <Resource name="users" list={StudentList} show={UserList} />
       <Resource name="users1" list={EvaluationList} show={Users1List} />

   </Admin>
  );

export default App;
