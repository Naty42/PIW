import { Box, Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

// devido o tempo, não conseguimos fazer o back-end do login, mas segue um pequeno comentário da lógica:
// quando o usuário insere seus dados, será requisitado para o banco de dados a matrícula/email e senha que foram inseridos pelo usuário. Então, para verificar isso, pode-use utilizar o find ou  o findOne, em que ele irá procurar no banco esses dados. Caso tenha, será retornado um booleano true com o json das informações se não, será retornado apenas um erro.

const LoginAluno = () => {


    //no useState, ele primeiro coloca o nome da variável, e depois é colocado o método que irá modificar essa variável que foi colocada anteriormente
    const [matricula, setMatricula] = useState("")
    const [senha, setSenha] = useState("")


    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        //no loginAluno ele recebe uma matrícula e senha que é inserida pelo usuário, e ele é adicionado pelo post
        const loginAluno = { matricula, senha }
        axios.post("http://localhost:3045/alunos", loginAluno)
            .then(
                (response) => {
                    alert(`Aluno ID ${response.data._id} logado!`)
                    navigate("/listarAluno")
                }
            )
            .catch(error => console.log(error))
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Login Aluno
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="matricula"
                    name="matricula"
                    label="Sua Matrícula"
                    autoFocus
                    onChange={(event) => setMatricula(event.target.value)}
                >
                </TextField>

                {/* // para linkar a variável de estado ao seu respectivo campo correspondente, faz-se isso:
                    no react, enquando a pessoa está digitando no campo, as variáveis de estado já estão sendo alimentadas, e quando a pessoa clica em "submit" os dados são enviados para o servidor para "pegar" o que está sendo digitado, usa-se o (event.target.value) */}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="senha"
                    name="senha"
                    label="Sua Senha"
                    autoFocus
                    onChange={(event) => setSenha(event.target.value)}
                >
                </TextField>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        type="submit"
                        component={Link}
                        to={"listarAluno"}
                        variant="contained"
                        sx={{ my: 3 }}
                    >
                        Logar
                    </Button>
                </Box>
            </Box>
        </>
    )
}

//

export default LoginAluno

