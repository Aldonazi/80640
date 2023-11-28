
import { Box, Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"

function Formulario(props){
    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState({
        nombre: '',
        password: ''
    })
    const hacerPeticion = async () =>{
        try {
            const res = await axios.get('http://localhost:4567')
            return res.data
        } catch (error) {
            throw error
        }
    }
    const procesarFormulario = (e)=>{
        e.preventDefault()
        console.log("datos Recuperados del formulario", datosFormulario)
        setCargando(true)

        try {

            const res = hacerPeticion()
            setCargando(false)
            if (datosFormulario.nombre == res.username){
                console.log("ok el usuario exisite");
            }else{
                console.log("error el usuario no existe");
            }
        } catch (error) {
            console.log(error);
            setCargando(false)
        }
    }
    return(
        <>
        <h1>Inicio de Sesión</h1>
        <form onSubmit={procesarFormulario}>
            <Box m={5}>
                <TextField label="Nombre: " variant="outlined" fullWidth></TextField>
            </Box>
            <Box m={5}>
                <TextField label="Contraseña: " variant="outlined" type="password" fullWidth></TextField>
            </Box>
            <Box m={5}>
                <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}>Iniciar Sesión</Button>
            </Box>
        </form>
        </>
    )
}

export default Formulario
