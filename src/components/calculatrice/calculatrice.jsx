const Calculatrice = () => {


    return (
        <form>
            <div>
                <label htmlFor="">Nombre 1 : </label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Opération : </label>
                <select id="">
                    <option value="">+</option>
                    <option value="">-</option>
                    <option value="">x</option>
                    <option value="">/</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Nombre 2 : </label>
                <input type="text" />
            </div>
            <div>
                <button type="submit">Calculer</button>
            </div>
            <div>
                <label htmlFor="">Resultat : </label>
                <input type="text" />
            </div>
        </form>
    );
};

export default Calculatrice;