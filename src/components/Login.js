import React, { useState } from 'react';
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from '../config/Config';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import '../style';

const useStyles = makeStyles(theme => ({ 
  backgroundContainer: {
    background: 'red',
    height: '100vh',
    position: 'relative'
  },
  form: {
    width: '300px',
    height: '400px',
    background: '#ffffff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '5%',
    transform: 'translate(0, 0)'
  },
  bgcolor: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '0%',
    transform: 'translate(0, 0%)',
    width: '50%',
    height: '100%',
    borderRadius: 0,
    backgroundColor: '#F13C3C',
    color: '#fff'
  },
  bgimage: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '0%',
    transform: 'translate(100%, 0)',
    width: '50%',
    height: '100%',
    borderRadius: 0
  }
}));

export const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const classes = useStyles();

  const login = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        setError('');
        props.history.push('/');
      })
      .catch(err => setError(err.message));
  };

  return (
    <div className="container">
      <Grid container className={classes.backgroundContainer}>
        <Grid item xs={12}>
          <Paper className={classes.bgimage} elevation={0}>
            <Paper
              className="bgimage"
              style={{ width: '100%', height: '100%', borderRadius: 0 }}
            />
          </Paper>

          <Paper className={classes.bgcolor} elevation={0}>
            <AllInclusiveIcon style={{ fontSize: 80 }} />
            <h1 style={{ margin: '30px' }}>Lets Kick Now !</h1>
          </Paper>

          <Paper className={classes.form}>
            <br />
            <h2
              style={{
                borderBottom: '5px solid #f13c3c',
                marginBottom: 20,
                padding: 5
              }}
            >
              Login
            </h2>
            <br />
            <form autoComplete="off" className="formGroup" onSubmit={login}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                type="email"
                className="form-control"
                required
                onChange={e => setEmail(e.target.value)}
                value={email}
                label="TextField"
                endAdornment={
                  <MailOutlineIcon
                    position="end"
                    style={{ color: '#707B7C' }}
                  />
                }
                style={{
                  marginBottom: 25
                }}
              />

              <br />
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                type="password"
                className="form-control"
                required
                onChange={e => setPassword(e.target.value)}
                value={password}
                label="TextField"
                endAdornment={
                  <LockOutlinedIcon
                    position="end"
                    style={{ color: '#707B7C' }}
                  />
                }
                style={{
                  marginBottom: 25
                }}
              />

              <br />
              <button type="submit" className="btnLogin">
                Login
              </button>
            </form>
            {error && <span className="error-msg">{error}</span>}
            <br />
            <span>
              Don't have an account? Register
              <Link to="signup"> Here</Link>
            </span>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
