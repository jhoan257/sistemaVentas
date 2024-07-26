import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import Link from "@mui/material/Link";

const Register = () => {
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
          id="outlined-basic-name"
          label="Nombre *"
          variant="outlined"
          color="success"
          fullWidth
        />
        <TextField
          id="outlined-basic-adress"
          label="Dirección *"
          variant="outlined"
          color="success"
          fullWidth
        />
        <TextField
          id="outlined-basic-rut"
          label="Numero de Rut *"
          variant="outlined"
          color="success"
          fullWidth
        />
        <TextField
          id="outlined-password-input"
          label="Contraseña"
          type="password"
          color="success"
          fullWidth
          autoComplete="current-password"
        />
        <Button variant="contained" color="success" fullWidth>
          Registrarse
        </Button>
        <Link href="/login">¿Ya tienes una cuenta?</Link>
      </Box>
    </>
  );
};

export default Register;
