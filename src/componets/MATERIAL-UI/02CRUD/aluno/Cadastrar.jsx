import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Cadastrar = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState("0.0")
    
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const novoAluno = { nome, curso, ira }
        axios.post("http://localhost:3045/alunos/register", novoAluno)
            .then(
                (response) => {
                    alert(`Aluno ID ${response.data._id} adicionado!`)
                    navigate("/listarAluno")
                }
            )
            .catch(error => console.log(error))
    }

    return (
        <>
             <Typography variant="h5" fontWeight="bold">
                Cadastrar Aluno
             </Typography>
             <Box
                component="form"
                onSubmit={handleSubmit}
             >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    autoFocus
                    onChange={(event)=>setNome(event.target.value)}
                >
                </TextField>

                <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="curso"
                        name="curso"
                        label="Curso"
                        onChange={(event)=>setCurso(event.target.value)}
                    >
                </TextField>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    label="IRA"
                    name="ira"
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}
                    onChange={(e) => setIra(parseFloat(e.target.value))}
                />

                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ my: 3 }}
                    >
                        Cadastrar
                    </Button>
                </Box>

             </Box>
        </>
    )
}

export default Cadastrar