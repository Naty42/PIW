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

const Aprovados = () => {
    const [aprovados, setAprovados] = useState([])

    useEffect(
        () => {
            axios.get("http://localhost:3045/alunos/listar")
                .then(
                    (response) => {
                        setAprovados(response.data)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )

    function calcularMediaIra() {
        let somaIRA = 0;
        for (let i = 0; i < aprovados.length; i++) {
            somaIRA += parseFloat(aprovados[i].ira);
        }
        const mediaIRA = somaIRA / aprovados.length;

        return mediaIRA.toFixed(2);
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Alunos Aprovados
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} arial-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Curso</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>

                    <TableBody>
                        {
                            aprovados.map(
                                (aprovado) => {
                                    const mediaToda = calcularMediaIra();

                                    //no if vai mostrar quem está aprovado, se a pessoa nao estiver aprovado, o ''return null'' lá em baixo vai fazer com que nao seja renderizado
                                    if (aprovado.ira > mediaToda) {
                                        return (
                                            <StyledTableRow key={aprovado._id}> 
                                            {/* essa key vai pegar os id dos aprovados para fazer a logica dos aprovados ou não */}

                                                <StyledTableCell>{aprovado._id}</StyledTableCell>
                                                <StyledTableCell>{aprovado.nome}</StyledTableCell>
                                                <StyledTableCell>{aprovado.curso}</StyledTableCell>
                                                <StyledTableCell>{aprovado.ira}</StyledTableCell>
                                            </StyledTableRow>

                                        )
                                    } else {
                                        console.log("reprovado");
                                        return null;
                                        //o return null vai fazer nao renderizar e mostra-ra apenas os aprovados
                                    }
                                }
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}


export default Aprovados