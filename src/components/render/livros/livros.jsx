import React from 'react';
import './livros.css';
import { useState } from 'react';

import Selecao from '../../livroSelectGen/select';
import Interruptor from '../../interruptor/interruptor';

function Livros() {
    const [conta, setConta] = useState(0);
    const [selecao, setSelecao] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,

    });

    const [open, setOpen] = useState(false);
    const [Novo, setNovo] = useState(false);
    const [Finalizado, setFinalizado] = useState(false);


    const Filters = () => {

        return (
            <>
                <span className='BOXS'>

                    <div className='boxSelection Gener'>
                        <Selecao setConta={setConta} setSelecao={setSelecao} Quantos={1} />
                    </div>

                    <div className='boxSelection'>
                        <span className='indi'>class Indicativa</span>
                    </div>

                    <div className='boxSelection inter'>
                        <Interruptor key={1} id={1} title={'LivrosNovos'} alvo={Novo} setAlvo={setNovo} />

                        <Interruptor key={2} id={2} title={'Finalizados'} alvo={Finalizado} setAlvo={setFinalizado} />
                    </div>

                </span>
            </>
        );
    };

    return (
        <div className='TelaLivros'>
            <form>
                <span className='boxLivros'>
                    <input type='text' id='searchText' placeholder='Buscar' />
                    <div id='searchImg'></div>
                </span>

                <div className='filtros'>
                    <span id='title'><p onClick={()=>{setOpen(!open)}}>filtros V</p></span>
                    {open ? Filters() : null}
                </div>
            </form>

            <section className='buscaLivros'>

            </section>


        </div>
    );
}

export default Livros;