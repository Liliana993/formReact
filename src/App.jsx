import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
<>
<Typography variant="h3" color="white.800" marginBottom={8}>
      My first Form!
    </Typography>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1fr)', gap: 3 }}>
    <Box  sx={{ gridColumn: 'span 8' }}>
        <TextField label="Nombre" color="secondary" focused />
        </Box>
        <Box sx={{ gridColumn: 'span 8' }}>
        <TextField label="Apellido" color="secondary" focused />
        </Box>
<Box sx={{ gridColumn: 'span 8' }}>
<TextField label="Email" color="secondary" focused />
</Box>
<Box sx={{gridColumn: 'span 8'}}>
<Button variant="contained" color="secondary" size="large">
      Enviar
    </Button>
</Box>
</Box>

   
    
    

</>
      
      
  )
}

export default App
