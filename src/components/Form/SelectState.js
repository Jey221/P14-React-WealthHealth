//import { useState } from 'react';
import States from '../../data/states.json';

function SelectState() {
  // const [state, setState] = useState();
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

/*   console.log('States', States);
  console.log('lol');
  return (
    <div>
      <label htmlFor="state">State</label>
      <select name="state" id="state">
        {States.forEach(function (state) {
          console.log('state', state);
          return <option value={state.abbreviation}>{state.name}</option>;
        })}
      </select>
    </div>
  );
 */

/*     
  States.forEach(function (state) {
    const option = document.createElement('option');
    option.value = state.abbreviation;
    option.text = state.name;
    return (
      <div>
        <label htmlFor="state">State</label>
        <select name="state" id="state" value={option}></select>
      </div>
    )
  }
// mise en place des états pour la selection
    console.log(States);
    const stateSelect = document.getElementById('state');
    console.log(stateSelect);
    States.forEach(function (state) {
      const option = document.createElement('option');
      option.value = state.abbreviation;
      option.text = state.name;
      stateSelect.appendChild(option);
      return (
        <div>
<label htmlFor="state">State</label>
          <select name="state" id="state"></select>
        </div>
      )
    });


JSX>>>>>>>>>>>>><label htmlFor="state">State</label>
          <select name="state" id="state"></select>


 */
