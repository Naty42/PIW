const ProfessorModel = require("../models/professor.models")

let professores = [
    { id: 0, nome: "Vito Corleone", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: false, ux: false, dev: false, math: false } },
    { id: 1, nome: "Michael Corleone", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: false, ux: false, dev: false, math: false } },
    { id: 2, nome: "Kay Adams", curso: "Sistemas de Informação", titulacao: "DOUT", ai: { es: false, ux: false, dev: false, math: false } },
    { id: 3, nome: "Peter Clemenza", curso: "Sistemas de Informação", titulacao: "GRAD", ai: { es: false, ux: false, dev: false, math: false } },
    { id: 4, nome: "Salvatore Tessio", curso: "Sistemas de Informação", titulacao: "MEST", ai: { es: false, ux: false, dev: false, math: false } },
    { id: 5, nome: "Luca Brasi", curso: "Sistemas de Informação", titulacao: "GRAD", ai: { es: false, ux: false, dev: false, math: false } }
]

//console.log(professores)
let id = 6

class professorService {

    static list () {
        return professores
    }

    static register (data) {
        let professor = new ProfessorModel(
            id++,
            data.nome,
            data.curso,
            data.titulacao,
            data.ai
        )
        professores.push(professor)
        return professor
    }

    static update(id,data){
        //buscando dentro do vetor
        for(let professor of professores){
            if(professor.id == id){
                professor.nome = data.nome
                professor.curso = data.curso
                professor.titulacao = data.titulacao
                professor.ai = data.ai
                return professor
            }
        }
        return null
    }

    static delete(id) {
        for(let i = 0; i < professores.length; i++){
            if (professores[i].id == id) {
                professores.splice(i, 1);
                return true;
            }
        }
        return false
    }

    static retrieve(id){
        for(let i = 0; i<professores.length; i++){
            if(professores[i].id == id){
                return professores [i]
            }
        }
        return {};
    }
}

module.exports = professorService