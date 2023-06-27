import { Typography, Box, TextField, FormControl, InputLabel, Select, MenuItem, Button, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CadastrarProfessor = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai, setAi] = useState({es:false,ux:false,dev:false,math:false})

    const {es, ux, dev, math} = ai
    const navigate =  useNavigate()

    function handleSubmit(event){
        //previne que a pagina recarrega e pega só os dados
        event.preventDefault()
        // console.log(nome)
        // console.log(curso)
        // console.log(titulacao)
        // console.log(ai)

        const novoProfessor = {nome,curso,titulacao,ai}

        axios.post("http://localhost:3045/professor/register", novoProfessor)
        .then(
            (response) => {
                alert(`Professor ID ${response.data._id} adicionado!`)
                navigate("/listarProfessor")
            }
        )
        .catch(error=>console.log(error))
    }

    //quando clicar no checkbox vai chamar essa função aqui
    function handleCheckbox(event){
        setAi({
            //desestruturação do que ja se tinha: o que ja tinha antes, aquilo que foi mudado no checkbox, que vai ser pegado via evento
            //event = clicou, target = o checkbox, name = nome do check
            ...ai,
            [event.target.name]:event.target.checked
        })
    }

    return(
            <>
                <Typography variant="h5" fontWeight="Bold" sx={{m:3}}>
                    Cadastrar Professor
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{m:3}}
                    
                >

                    <TextField 
                        margin="normal"
                        required //obrigatório
                        fullWidth
                        id="nome"
                        name="nome"
                        label="Nome Completo"
                        autoFocus
                            // para enviar as infos desse text pro servidor

                        onChange={(event)=>setNome(event.target.value)}

                    />

                    <TextField 
                        margin="normal"
                        required //obrigatório
                        fullWidth
                        id="curso"
                        name="curso"
                        label="Seu Curso"

                        onChange={(event)=>setCurso(event.target.value)}
                    />

                     {/* pra fazer select */}
                    <FormControl 
                    fullWidth sx={{mt:2}}>
                        <InputLabel id="select-tit-label">Titulação</InputLabel>

{/*label id do select para relacionar com o inputlabel em cima*/}
                        <Select
                            labelId="select-tit-label"
                            label="Titulação"
                            value={titulacao}
                            onChange={(event)=>setTitulacao(event.target.value)}
                        >
                            <MenuItem value="GRAD">Graduação</MenuItem>
                            <MenuItem value="MEST">Mestrado</MenuItem>
                            <MenuItem value="DOUT">Doutorado</MenuItem>
                        </Select>
                    </FormControl>

                        {/* para fazer o checkbox */}
                    <FormControl
                        component="fieldset"
                        variant="standard"
                        sx={{mt:2,ml:2}}
                    >

                        <FormLabel
                            component="legend"
                            sx={{fontSize:12,mb:2}}
                        >
                            Áreas de Interesse
                        </FormLabel>
                        <FormGroup>
                            {/* diz no control que o objeto é um checkbox */}

                            <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox}/>} label="E.S."/>

                            <FormControlLabel control={<Checkbox checked={ux} name="ux" onChange={handleCheckbox}/>} label="UX"/>

                            <FormControlLabel control={<Checkbox checked={dev} name="dev" onChange={handleCheckbox}/>} label="Devops"/>

                            <FormControlLabel control={<Checkbox checked={math} name="math" onChange={handleCheckbox}/>} label="Math"/>
                        </FormGroup>
                        
                    </FormControl>

                    <Box sx={{display:"flex", justifyContent:"center"}}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{my:3}}
                           
                        >
                            Cadastrar 
                            {/*clicando nele vai chamar o onsubmit lá em cima*/}
                        </Button>  
                    </Box>  
                </Box>
            </>
    )
}

export default CadastrarProfessor