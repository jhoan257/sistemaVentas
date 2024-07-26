import { Box, Typography, Button, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Typography variant="h4" size="large" sx={{ marginY: 2 }}>
          Lista de Productos
        </Typography>
        <IconButton aria-label="delete" sx={{ margin: 2 }}>
          <AddCircleIcon color="success" />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "white",
          borderRadius: 4,
          minWidth: 320,
          padding: 4,
          gap: 2,
          boxShadow: 3,
        }}
      >
        <Typography>Nombre del Producto: </Typography>
        <Typography>Categoria: </Typography>
        <Typography>Proveedor: </Typography>
        <Typography>Precio Actual: </Typography>
        <Typography>Stock: </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" color="success">
            actualizar
          </Button>
          <Button variant="contained" color="error">
            Eliminar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
