import React from 'react';
import './livros.css';
import Livro from '../../../imgs/manifesto.PNG';
import Lupa from '../../../imgs/lupa.png';



function Livros() {
  return (
    <div>
    <section className='boxLivros'>
        <span>
            <p id='titleLivro'>Lívros</p>
            <span id='search'>
                <input type='text' id='searchText' placeholder='Buscar'></input><img src={Lupa} id='searchImg'/>
            </span>
        </span>
    </section>

    <section className='buscaLivros'>
        <span>
            <div className='cardLivro'>
                <p className='titleCard'>nome do livro</p>
                <p className='local'>local</p>
                <img src={Livro} alt="" />
            </div>
            <div className='cardLivro'>
                <p className='titleCard'>nome do livro</p>
                <p className='local'>local</p>
                <img src={Livro} alt="" />
            </div>
            <div className='cardLivro'>
                <p className='titleCard'>nome do livro</p>
                <p className='local'>local</p>
                <img src={Livro} alt="" />
            </div>
        </span>

        <span>
            <div className='cardLivro'>
                <p className='titleCard'>nome do livro</p>
                <p className='local'>local</p>
                <img src={Livro} alt="" />
            </div>
            <div className='cardLivro'>
                <p className='titleCard'>nome do livro</p>
                <p className='local'>local</p>
                <img src={Livro} alt="" />
            </div>
            <div className='cardLivro'>
                <p className='titleCard'>nome do livro</p>
                <p className='local'>local</p>
                <img src={Livro} alt="" />
            </div>
        </span>

    </section>


    </div>
    );
  }
  
  export default Livros;