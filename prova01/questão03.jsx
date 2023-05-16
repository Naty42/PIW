import { useEffect, useState } from "react";
import React from "react";

const Questão03 = () => {
    const [capitalMaior, setMaior] = useState("");
    const [capitalMenor, setMenor] = useState ("");
    //variáveis de estado para o armazenamento de quais capitais tem maior e menor indice de população.

    useEffect(
        () => {
            .then(
                (response) => {

                }
            )
            .catch(
                error=>{
                    console.log(error); 
                }
            )
        },
        []  
    )
}

    return(
        <div>
            <h3>Capital com maior população:{capitalMaior}</h3>
            <h3>Capital com menor população: {capitalMenor}</h3>
        </div>
    )
}