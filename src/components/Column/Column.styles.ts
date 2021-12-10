import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  column: {
    minHeight: '100px',
    minWidth: '300px',
    height: 'fit-content',
    '&:not(:first-child)': {
      marginLeft: '10px'
    }
  },
  header: {
    padding: '10px',
    backgroundColor: 'rgb(197, 197, 197)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&>button': {
      cursor: 'pointer'
    }
  },
  wrapper: {
    padding: '10px',
    minHeight: '60px'
  },
  title: {
    padding: '5px',
    fontSsize: '16px',
    '&:focus': {
      background: 'white',
      outline: 'none'
    }
  }
}));
