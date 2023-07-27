import React from 'react';
import './Cotatie.css';

function ListCursuri() {
  return (
    <div id="bankValute_outer" className="bankValute">
      <div id="bankValute">
        <h1>Cotatiile BNM</h1>
        <form action="post">
          <p>
            <span className="subtitle">Cotatiile Bancii Nationale a Moldovei pe date:</span>
            <span className="input-group-date" data-input="#BanksCote">
              <input type="date" className="form-control" />
              <span className="input-group-btn">
                <button className="btn"> Afiseaza </button>
              </span>
            </span>
          </p>
        </form>
      </div>
      <br />
      <div></div>
      <div className="table-container">
        {/* Antetele tabelului */}
        <div className="table-header">
          <div className="header-item">Simbol</div>
          <div className="header-item">Denumirea Valuta</div>
          <div className="header-item">Cotatie</div>
          <div className="header-item">Variatie</div>
          <div className="header-item">Variatie %</div>
          <div className="header-item">24.07.2023</div>
          <div className="header-item">19.07.2023</div>
        </div>
        <div className="table-value">
          <div className="header-item">USD</div>
          <div className="header-name">Dolar S.U.A</div>
          <div className="header-item">17.6181</div>
          <div className="header-item">-0.2161</div>
          <div className="header-item">-1.2117 %</div>
          <div className="header-item">17.8342</div>
          <div className="header-item">17.9151</div>
        </div>
        <div className="table-value">
          <div className="header-item">EUR</div>
          <div className="header-name">EURO</div>
          <div className="header-item">19.7623</div>
          <div className="header-item">-0.3118</div>
          <div className="header-item">-1.5523</div>
          <div className="header-item">20.0741</div>
          <div className="header-item">20.1261</div>
        </div>
        <div className="table-value">
          <div className="header-item">RUB</div>
          <div className="header-name">Rubla Ruseasca</div>
          <div className="header-item">0.1935</div>
          <div className="header-item">-0.0034</div>
          <div className="header-item">-1.7268</div>
          <div className="header-item">0.1969</div>
          <div className="header-item">0.1983</div>
        </div>
        <div className="table-value">
          <div className="header-item">RON</div>
          <div className="header-name">Leu Rominesc</div>
          <div className="header-item">3.9949</div>
          <div className="header-item">-0.0707</div>
          <div className="header-item">-1.7390</div>
          <div className="header-item">4.0656</div>
          <div className="header-item">4.0732</div>
        </div>
        <div className="table-value">
          <div className="header-item">UAH</div>
          <div className="header-name">Hrivna Ucraineana</div>
          <div className="header-item">0.4770</div>
          <div className="header-item">-0.0059</div>
          <div className="header-item">-1.2218</div>
          <div className="header-item">0.4829</div>
          <div className="header-item">0.4852</div>
        </div>
        <div className="table-value">
          <div className="header-item">AUD</div>
          <div className="header-name">Dolar Australian</div>
          <div className="header-item">11.9152</div>
          <div className="header-item">-0.2388</div>
          <div className="header-item">-1.9648</div>
          <div className="header-item">12.1540</div>
          <div className="header-item">12.2079</div>
        </div>
        <div className="table-value">
          <div className="header-item">BGN</div>
          <div className="header-name">Leva Bulgara</div>
          <div className="header-item">10.1047</div>
          <div className="header-item">-0.1584</div>
          <div className="header-item">-1.5434</div>
          <div className="header-item">10.2631</div>
          <div className="header-item">10.2906</div>
        </div>
        <div className="table-value">
          <div className="header-item">CAD</div>
          <div className="header-name">Dolar Canadian</div>
          <div className="header-item">13.3663</div>
          <div className="header-item">-0.1414</div>
          <div className="header-item">-1.0468</div>
          <div className="header-item">13.5077</div>
          <div className="header-item">13.5505</div>
        </div>
        <div className="table-value">
          <div className="header-item">CHF</div>
          <div className="header-name">Frank Elvetian</div>
          <div className="header-item">20.5172</div>
          <div className="header-item">-0.2734</div>
          <div className="header-item">-1.3150</div>
          <div className="header-item">20.7906</div>
          <div className="header-item">20.8573</div>
        </div>
      </div>
    </div>
  );
}
export default ListCursuri;