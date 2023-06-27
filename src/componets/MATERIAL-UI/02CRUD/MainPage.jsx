import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenuV1 from "./02MyMenuV1"
import { Container } from "@mui/material"
import CadastrarProfessor from "./professor/Cadastrar"
import EditarProfessor from "./professor/Editar"
import ListarProfessor from "./professor/Listar"
import CadastrarAluno from "./aluno/Cadastrar"
import ListarAluno from "./aluno/Listar"
import EditarAluno from "./aluno/Editar"



const MainPage = () => {    
    return (
            <BrowserRouter>
                <MyMenuV1  />
                <Container sx={{mt:8}}>
                    <Routes>
                        <Route path="cadastrarProfessor"element={<CadastrarProfessor/>}/>
                        <Route path="editarProfessor/:id" element={<EditarProfessor/>}/>
                        <Route path="listarProfessor" element={<ListarProfessor/>}/>

                        <Route path="cadastrarAluno" element={<CadastrarAluno/>}/>
                        <Route path ="listarAluno" element={<ListarAluno/>}/>
                        <Route path="editarAluno/:id" element={<EditarAluno />}/>

                    </Routes>
                </Container>
            </BrowserRouter>
    )
}

export default MainPage