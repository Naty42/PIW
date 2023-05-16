//Os comentários estão abaixo do código referencia.


import { useState } from "react";

const Questao01A = () => {
    
    const [media, setMedia] = useState([]);
    // const com Use State amazenará os dados da media

    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
    ];


    const falarComFilho = (medias) => {
        setMedia(medias)
    }
//Função que fará com que o pai se comunique com o filho 


    return(
        <div>
            <Questao01B setandoMedias={falarComFilho} alunos={alunos}>
            </Questao01B>


            <div>
                {media.map((aluno) => (
                    <p>{aluno.media >= 6 ? aluno.nome : ""}</p>
                ))}
            </div>
        </div>
        //Para passar por todo o objeto "alunos" e verificar as medias de cada um dele, deve-se usar o map

    )
}

function Questao01B(alunos, setandoMedias){

    const mediaDoAluno = () => {
        const medias = alunos.map((aluno) => {
            const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
            return {nome: aluno.nome, media}
        })
        //o objeto que o map irá passar (nome e media)

        setandoMedias(medias);
    }

    return(
        //Ao clicar no botao, essa ação chamará a const "media do aluno", e então, ela irá executar seu comando.
        <div>
            <button onClick={mediaDoAluno}>MÉDIAS</button>
        </div>
    )
}

export {Questao01A, Questao01B}