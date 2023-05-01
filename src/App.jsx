import Kitchen from './Kitchen';
import './App.css'
import LivingRoom from './LivingRoom';
import Bath from './Bath';
import Bedroom from './Bedroom';

// CodeSandbox.js

function FloorPlan() {
  return (
    <>
    <h1>Floor Plan</h1>
    <div>
      <h2><Bath size="" /> </h2>
      <h2><Kitchen /></h2>
      <h2><Bedroom bedNum={0}/></h2>
      <h2><LivingRoom /></h2>
    </div>
  </>
  );
}

export default FloorPlan
