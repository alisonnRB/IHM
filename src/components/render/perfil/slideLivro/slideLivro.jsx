import React from "react";
import { useState, useEffect } from "react";
import './slideLivro.css';

export default function MeusLivros(props) {
    const [hover, setHover] = useState('');
    const [livro, setLivro] = useState([<div key={0}></div>]);
    const [starDeFundo, setstarDeFundo] = useState([]);
    const [starDeFront, setstarDeFront] = useState([]);
    const [mineOrFav, setMineOrFav] = useState('');

    function createStar(classe, i) {
        const style = {
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5 + 1}s`,
        };

        return (
            <div key={`star-${i}${props.comp}`} className={`${classe} ${mineOrFav}`} style={style}></div>
        );
    }

    useEffect(() => {
        const classe = ['star', 'starFundo'];
        const numStars = 10;
        const listStarFundo = [];
        const listStar = [];

        if (props.meusOrFav) {
            setMineOrFav(props.meusOrFav);
        }

        for (let i = 0; i < numStars; i++) {
            const star = createStar(classe[0], i);
            listStar.push(star);
        }
        for (let i = 0; i < numStars * 3; i++) {
            const starFundo = createStar(classe[1], i);
            listStarFundo.push(starFundo);
        }
        if (props.livro) {
            setLivro(meusLivros(props.livro, localStorage.getItem('id')));
        }
        setstarDeFundo(listStarFundo);
        setstarDeFront(listStar);

    }, [props]);

    const passarLiga = () => {

        setHover('hover');

        setTimeout(() => {
            if (hover != 'hover') {
                setHover('');
                console.log('oi');
            }
        }, 10000);

    }

    const meusLivros = (livros, id) => {
        const a = "http://192.168.255.56/livros/" + id + '/';
        const tempRow = [];
        for (let i = 0; i < livros.length; i++) {
            tempRow.push(<img key={`livro-${i}`} className='imagemCapa' src={a + livros[i]['imagem']} />);
            if (i >= 6) {
                break;
            }
        }
        return tempRow;
    }

    return (
        <span className='slidersLivros'>

            <div className={'caixaDeLivros'} onMouseEnter={passarLiga}>
                <div className='animation'>
                    {starDeFront}{starDeFundo}

                    <div className={`content ${hover}`}>
                        <span className='roler'>
                            {livro}
                        </span>
                    </div>
                </div>
            </div>

        </span>
    );
}