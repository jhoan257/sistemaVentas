import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import Link from "@mui/material/Link";

import appFirebase from "../../firebaseConfig";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          p: 4,
          borderRadius: 4,
          minWidth: 320,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <Box>
          <LockIcon fontSize="large" color="success" />
          <Typography>Sistema de Ventas</Typography>
        </Box>
        <TextField
          id="id-correo"
          label="Correo Electrónico *"
          variant="outlined"
          color="success"
          fullWidth
        />
       
       <TextField
          id="id-contraseña"
          label="Contraseña"
          type="password"
          color="success"
          fullWidth
          autoComplete="current-password"
        />
        <Button variant="contained" color="success" fullWidth>
          Iniciar Sesión
        </Button>
        <Link href="/register">¿No tienes una cuenta?</Link>
      </Box>
    </>
  );
};

export default Login;
