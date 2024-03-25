import { useId, useState } from 'react';

// Entier
const numberRegex1 = /^-?\d*$/;
const numberRegex2 = /^-?[0-9]*$/;

// Réel
const numberRegex3 = /^-?(\d+(\.\d*)?)?$/;
const numberRegex4 = /^-?([0-9]+(\.[0-9]*)?)?$/;


const Calculatrice = () => {

    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState('*');
    const [result, setResult] = useState('');
    const id = useId();

    const handleInputNumber = (e, setValue) => {
        const { value } = e.target;

        if(numberRegex4.test(value)) {
            setValue(value);
        }
    }

    const handleCalcSubmit = (e) => {
        e.preventDefault();

        setResult(() => {
            const val1 = parseFloat(nb1);
            const val2 = parseFloat(nb2);

            switch (op) {
                case '+':
                    return val1 + val2;
                case '-':
                    return val1 - val2;
                case '*':
                    return val1 * val2;
                case '/':
                    if(val2 !== 0 ) {
                        return val1 / val2;
                    }
                    return 'Division par zero 🧨';
                default:
                    return 'Opération non supporté !';
            }
        });
    }

    return (
        <form onSubmit={handleCalcSubmit}>
            <div>
                <label htmlFor={id + '-nb1'}>Nombre 1 : </label>
                <input type="text" id={id + '-nb1'}
                    value={nb1}
                    onChange={(e) => handleInputNumber(e, setNb1)} />
            </div>
            <div>
                <label htmlFor={id + '-op'}>Opération : </label>
                <select id={id + '-op'}
                    value={op}
                    onChange={(e) => setOp(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">x</option>
                    <option value="/">/</option>
                </select>
            </div>
            <div>
                <label htmlFor={id + '-nb2'}>Nombre 2 : </label>
                <input type="text" id={id + '-nb2'}
                    value={nb2}
                    onChange={(e) => handleInputNumber(e, setNb2)}/>
            </div>
            <div>
                <button type="submit">Calculer</button>
            </div>
            <div>
                <label htmlFor={id + '-res'}>Resultat : </label>
                <input type="text" id={id + '-res'}
                    value={result}
                    readOnly />
            </div>
        </form>
    );
};

export default Calculatrice;