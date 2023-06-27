import { AppBar, Container, Toolbar, Typography, Box, Button, Menu, MenuItem } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { Link } from "react-router-dom"
import { useState } from "react"

const MyMenuV1 = () => {

    const [anchorElProfessor, setAnchorElProfessor] = useState(null)

    const handleOpenProfessorMenu = (event) => {
        setAnchorElProfessor(event.currentTarget)
    }
    const handleCloseProfessorMenu = () => {
        setAnchorElProfessor(null)
    }


    const [anchorElAluno, setAnchorElAluno] = useState(null)

    const handleOpenAlunoMenu = (event) => {
        setAnchorElAluno(event.currentTarget)
    }
    const handleCloseAlunoMenu = (event) => {
        setAnchorElAluno(null)
    }


    const dropProfMenu = () => {
        return (
            <Box>
                <Button
                    sx={{
                        my: 2, color: "white"
                    }}
                    onClick={handleOpenProfessorMenu}
                >
                    Professores
                </Button>

                <Menu
                    anchorEl={anchorElProfessor}
                    open={Boolean(anchorElProfessor)}
                    onClose={handleCloseProfessorMenu}
                >

                    < MenuItem
                        onClick={handleCloseProfessorMenu}
                        component={Link}
                        to={"cadastrarProfessor/"}
                    >
                        <Typography>Cadastrar</Typography>
                    </MenuItem>


                    <MenuItem
                        onClick={handleCloseProfessorMenu}
                        component={Link}
                        to={"listarProfessor"}
                    >
                        <Typography>Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }


    const dropAlunoMenu = () => {
        return (
            <Box>
                <Button
                    sx={{
                        my: 2,
                        color: "white"
                    }}
                    onClick={handleOpenAlunoMenu}
                >
                    Alunos
                </Button>

                <Menu
                    anchorEl={anchorElAluno}
                    open={Boolean(anchorElAluno)}
                    onClose={handleCloseAlunoMenu}
                >

                    <MenuItem
                        onClick={handleCloseAlunoMenu}
                        component={Link}
                        to={"cadastrarAluno"}
                    >
                        <Typography>Cadastrar</Typography>
                    </MenuItem>

                    <MenuItem
                        onClick={handleCloseAlunoMenu}
                        component={Link}
                        to={"listarAluno"}
                    >
                        <Typography>Listar</Typography>
                    </MenuItem>

                    <MenuItem
                        onClick={handleCloseAlunoMenu}
                        component={Link}
                        to={"aprovados"}
                    >
                        <Typography>Alunos Aprovados</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }



    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        component={Link} //diz que é link
                        to={"loginAluno"}//diz que é link
                        variant="h4"
                        sx={{
                            ml: 4,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            textDecoration: "none",
                            color: "white"
                        }}>
                        CRUD_V1
                    </Typography>


                    <Box sx={{ ml: 3, width: "100%", display: "flex", justifyContent: "flex-end" }}>

                        {dropProfMenu()}

                        {dropAlunoMenu()}

                        <Button sx={{ my: 2, color: "white" }} onClick={() => alert("foi")}>Sobre</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenuV1