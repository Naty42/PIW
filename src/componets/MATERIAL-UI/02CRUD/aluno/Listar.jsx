import { Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Box } from "@mui/material"
import { tableCellClasses } from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.bottom}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const Listar = () => {
    const [alunos, setAlunos] = useState([])
    //const navigate = useNavigate()

    useEffect(
        () => {
            axios.get("http://localhost:3045/alunos/listar")
                .then(
                    (response) => {
                        setAlunos(response.data)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )

    //na função abaixo está a lógica para deletar o aluno pelo seu ID. Ele usa o filter para filtrar todos os alunos, e se caso o id deles for diferente do que está sendo procurando, eles serão armazenados ao invés de excluídos.

    function deleteAlunoById(id) {
        if (window.confirm("Deseja Excluir?")) {
            axios.delete(`http://localhost:3045/alunos/delete/${id}`)
                .then(
                    (reponse) => {
                        const resultado = alunos.filter(aluno => aluno._id != id)
                        setAlunos(resultado)
                    })
                .catch(error => console.log(error))
            alert("Aluno " + id + " excluído com sucesso!")
        }
    }

    //para calcular a média do IRA, utilizamos um for para percorrer a lista de alunos (que contem já a informação do IRA de cada um), e depois foi feita a soma de todas essas notas percorridas e depois pegamos o tamanho da lista de alunos com alunos.length e a dividimos, calculando assim, a média de todos os IRAs.
    function calcularMediaIra() {
        let somaIRA = 0;
        for (let i = 0; i < alunos.length; i++) {
            somaIRA += parseFloat(alunos[i].ira);
        }
        const mediaIRA = somaIRA / alunos.length;

        return mediaIRA.toFixed(2);// 2 para a média ter 2 casa decimais
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Aluno
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} arial-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Curso</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell>Ações</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {
                            alunos.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno._id} sx={aluno.ira < calcularMediaIra() ? { background: "red" } : {}}>
                                            <StyledTableCell>{aluno._id}</StyledTableCell>
                                            <StyledTableCell>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton arial-label="edit" color="primary" component={Link} to={`/editarAluno/${aluno._id}`}>
                                                        <EditIcon />
                                                    </IconButton>

                                                    <IconButton arial-label="delete" color="primary" onClick={() => deleteAlunoById(aluno._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }

                        <StyledTableRow>
                            <StyledTableCell colSpan={3} align="right">
                                Média IRA:
                            </StyledTableCell>

                            <StyledTableCell>{calcularMediaIra()}</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

export default Listar