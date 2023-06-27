import { Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import { tableCellClasses } from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
//import { Navigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const Listar = () => {

    //variável de estado
    
    const [professores, setProfessores] = useState([])
    const [mudou, setMudou] = useState(false)
    //const navigate = useNavigate()

    useEffect(
        () => {
            axios.get("http://localhost:3045/professor/listar")
            .then(
                (response) => {
                    //console.log(response)
                    setProfessores(response.data)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        []
    )

    function deleteProfessor(id) {
        if (window.confirm("Deseja Excluir?")){
            axios.delete(`http://localhost:3045/professor/delete/${id}`)
            .then(
                (response) => {
                    // const resultado = professores.filter(professor => professor.id != id)
                    // setProfessores(resultado)
                    deleteTeste(id)
                    setMudou(!mudou)
                }
            )
            .catch(error=>console.log(error))
        }
    }

    function deleteTeste (id) {
        for(let i = 0; i < professores.length; i++){
            if (professores[i]._id == id) {
                professores.splice(i, 1);
                return true;
            }
        }
        return false
    }

    return (
        <>
            {/* <h1>Listar {id} {nome}</h1> */}
            <Typography variant="h5" fontWeight="bold">
                Listar Professores
            </Typography>

            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Curso</StyledTableCell>
                            <StyledTableCell>Titulação</StyledTableCell>
                            <StyledTableCell>Ações</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {professores.map((professor) => (
                            <StyledTableRow key={professor._id}>
                                <StyledTableCell>{professor._id}</StyledTableCell>
                                <StyledTableCell align="left">{professor.nome}</StyledTableCell>
                                <StyledTableCell align="left">{professor.curso}</StyledTableCell>
                                <StyledTableCell align="left">{professor.titulacao}</StyledTableCell>
                                <StyledTableCell align="left">

                                    <Stack direction="row" spacing={1}>

                                        {/* usar função callback "()=>{}" pra que a função que voce quer, nao fique executando sempre */}
                                        
                                        <IconButton aria-label="delete" color="primary" onClick={()=>deleteProfessor(professor._id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                        
                                        <IconButton color="primary" aria-label="edit" component={Link} to={`/editarProfessor/${professor._id}`}>
                                            <EditIcon />
                                        </IconButton>
                                    </Stack>

                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Listar