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

    function deleteAlunoById(id) {
        if(window.confirm("Deseja Excluir?")){
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

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar Aluno
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{minWidth:650}} arial-label="simple table">
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
                                (aluno)=>{
                                    return (
                                        <StyledTableRow>
                                            <StyledTableCell>{aluno._id}</StyledTableCell>
                                            <StyledTableCell>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>                            
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton arial-label="edit" color="primary" component={Link} to={`/editarAluno/${aluno._id}`}>
                                                        <EditIcon />
                                                    </IconButton>

                                                    <IconButton arial-label="delete" color="primary" onClick={()=>deleteAlunoById(aluno._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>    
                                            </StyledTableCell>            
                                        </StyledTableRow>
                                    )
                                }
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

export default Listar