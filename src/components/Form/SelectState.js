import States from '../../data/states.json';

function SelectState() {
  // récupération de la sélection de l'état
  const stateChange = (e) => {
    console.log('etat', e.target.value);
    console.log('hi');
    localStorage.setItem('state', e.target.value);
  };
  return (
    <div>
      <label htmlFor="state">State</label>
      <select name="state" id="state" onChange={(e) => stateChange(e)}>
        {States.map((state) => {
          return (
            <option value={state.abbreviation} key={state.abbreviation}>
              {state.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectState;
