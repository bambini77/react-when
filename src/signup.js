import React from "react";
import "./style.css";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';


export default function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{m:1, bgcolor:'secondary.main'}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <TextField 
          margin="normal"
          label="이메일 주소" 
          required 
          fullWidth 
          name="email" 
          autoComplete="email"/>

        <TextField 
          margin="normal"
          label="비밀번호"
          required
          fullWidth
          name="new-password"/>

        <FormControlLabel control={<Checkbox value="remember" color="primary" />}
        label= "부가정보를 이메일로 받는것에 동의합니다"
        />

        <Button type="submit" fullWidth variant="contained" sx={{mt:3,mb:2}}>
          회원가입
        </Button>
        
        <Grid container>
          <Grid item xs>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">계정이있나요? 로그인하기</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}