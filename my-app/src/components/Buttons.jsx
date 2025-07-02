//Buttons

function Buttons({ onClickButton }) {
    const botoes = ['AC', '←', '%', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '='
    ];
    return (
        <div className="grid grid-cols-4 gap-4 bg-gray-300 p-4">
            {botoes.map((botao) => (
                <button
                    key={botao}
                    className="bg-blue-500 hover:bg-blue-700 text-white p-4 font-bold text-xl rounded"
                    onClick={() => onClickButton(botao)}
                >
                    {botao}
                </button>
            ))}
        </div>
    );


}

export default Buttons