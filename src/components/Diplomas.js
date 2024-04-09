import jsonData from '../data/data.json';
import DiplomaList from './DiplomaList';

function Diplomas() {
    return (
    <div className='diplomas' id='diplomas'>
        <h3>{jsonData.francais.titreFormation}</h3>
        <DiplomaList />
    </div>
    );
}

export default Diplomas;