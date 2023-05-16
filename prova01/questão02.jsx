import { useState } from "react";
import PoseFrente from "./frente.jpg";
import PoseCosta from "./Costa.jpg";

const Questao02 = () => {

    const [pousou, setPousou] = useState(false);
    const [img, setImg] = useState(PoseFrente);
    //variáveis pra apontar se a pose mudou ou não; e pra armazenar em qual pose está.

    const virar = () => {
        if (pousou == false) 
        { setPousou (true);
        setImg (PoseCosta);
        } else {
        setPousou (false);
        setImg(PoseFrente);
        }
    }
    //IF simples para realizar o comando do botão ao ser clicado, a pose do Charmander trocar


    return (
        <div>
        <img style={{ width: "400px" }} src={img}></img>
        <button onClick={virar}>Trocar de Pose</button>
        </div>
    );
    //tamanho escolhido da imagem e o comando do botão ao ser clicado e acionará a função virar.
};

export default Questao02;