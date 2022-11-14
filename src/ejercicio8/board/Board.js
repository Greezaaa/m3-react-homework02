import React, { useState, useEffect } from 'react';
import './board.css';

const Board = () => {
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();
    const [alert, setAlert] = useState();

    const checkForWinner = (squares) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagnol: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        };

        for (let combo in combos) {
            combos[combo].forEach((pattern) => {

                if (
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === ''
                ) {

                } else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    setWinner(squares[pattern[0]]);
                }
            });
        }
    };
    useEffect(() => {
        setAlert("")
    }, [turn])


    const handleClick = (num) => {
        if (cells[num] !== '') {
            setAlert("Allready Clicked!!!")
            return;
        }

        let squares = [...cells];
        if (turn === 'x') {
            squares[num] = 'x';
            setTurn('o');
        } else {
            squares[num] = 'o';
            setTurn('x');
        }
        checkForWinner(squares);
        setCells(squares);
    };

    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
    };

    const Cell = ({ num }) => {
        return <div className='cell' onClick={() => handleClick(num)}>{cells[num]}</div>;
    };

    return (
        <div className='wrapper'>
            <div className='tabla'>
                Turno: {turn}
                <div className='row'>
                    <Cell num={0} />
                    <Cell num={1} />
                    <Cell num={2} />
                </div>
                <div className='row'>
                    <Cell num={3} />
                    <Cell num={4} />
                    <Cell num={5} />
                </div>
                <div className='row'>
                    <Cell num={6} />
                    <Cell num={7} />
                    <Cell num={8} />
                </div>
            </div>
            {winner ? <p> Gana {winner}</p> : <></>}
            {alert ? <p> {alert} </p> : <></>}
            <button onClick={() => handleRestart()}>Play Again</button>
        </div>
    );
};

export default Board;