import {connect} from 'react-redux';
import React, {Component} from "react";

import {changeEngine} from './actions/engine';
import {changePaint} from './actions/paint';
import {changeRimsPaint} from './actions/rims_paint';
import {changeRimsSize} from './actions/rims_size';
import {changeSeats} from './actions/seats';
import {changeUpholstery} from './actions/upholstery';
import {addAdditional} from './actions/additional';
import {changeCurrent} from './actions/current';

import "./style.scss";

import index from "./images/index.jpg";
import engine1 from "./images/engine1.jpg";
import engine2 from "./images/engine2.jpg";
import engine3 from "./images/engine3.jpg";
import c_paint1 from "./images/c_paint1.jpg";
import c_paint2 from "./images/c_paint2.jpg";
import c_paint3 from "./images/c_paint3.jpg";
import r_paint1 from "./images/r_paint1.jpg";
import r_paint2 from "./images/r_paint2.jpg";
import r_paint3 from "./images/r_paint3.jpg";
import seat1 from "./images/seat1.jpg";
import seat2 from "./images/seat2.jpg";
import seat3 from "./images/seat3.jpg";
import uph1 from "./images/uph1.jpg";
import uph2 from "./images/uph2.jpg";
import uph3 from "./images/uph3.jpg";
import rims from "./images/rims.jpg";
import led from "./images/led.jpg";
import sus from "./images/sus.jpg";
import audio from "./images/audio.jpg";

function changeStyle(classDiv, id) {
  let all = document.getElementsByClassName(classDiv);
  for (let i = 0; i < all.length; i++) {
    if (all[i].classList.contains('active')) {
      var current = all[i];
      current.className = current.className.replace(" active", "");
    }
  } 
  document.getElementById(id).className += " active";
}

function changeStyleMultiple(id) {
  let current = document.getElementById(id)
  if (current.classList.contains('active')) {
    current.className = current.className.replace(" active", "");
  } else {
   current.className += " active";
  }
}

class App extends Component {
  constructor(props) {
    super(props);

  }

  

  render() {

    let component = null;
    switch(this.props.current.current) {
      case 'engine':
        component = <Engine {...this.props} />;
        break;
      case 'car_p':
        component = <Car_p {...this.props} />;
        break;
      case 'rims_p':
        component = <Rims_p {...this.props} />;
        break;
      case 'rims_s':
        component = <Rims_s {...this.props} />;
        break;
      case 'seats':
        component = <Seats {...this.props} />;
        break;
      case 'upholstery':
        component = <Upholstery {...this.props} />;
        break;
      case 'additional':
        component = <Additional {...this.props} />;
        break;
      case 'summary':
        component = <Summary {...this.props} />;
        break;
      default:
        component = <Index {...this.props} />;
    }

      return (
      <div className="main">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
          <a className="navbar-brand" href="/">Konfiguracja samochodu</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Strona główna</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">

          {component}

        </div>
      </div>
    );
  }
};


class Index extends Component {
  constructor(props) {
    super(props);

    this.handleChangeCurrent = this.handleChangeCurrent.bind(this);

  }

  handleChangeCurrent(ev) {
    ev.preventDefault();

    this.props.dispatch(changeCurrent('engine'));
  }

  render() {
    return (
      <div className="d-flex justify-content-center flex-column">
        <h1 className = "text-center m-1">Zapraszamy do skorzystania</h1>
        <img src={index} className="rounded" alt="car"/>
        <button className="btn btn-primary ml-auto mr-auto m-4" type="button" onClick={this.handleChangeCurrent}>Przejdź do konfiguratora</button>
      </div>
    )
  }
}

class Engine extends Component {
  constructor(props) {
    super(props);

    this.handleChangeEngine = this.handleChangeEngine.bind(this);
    this.handleChangeCurrent = this.handleChangeCurrent.bind(this);

  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChangeCurrent(ev) {
    ev.preventDefault();

    this.props.dispatch(changeCurrent('car_p'));
  }

  handleChangeEngine(ev) {
    ev.preventDefault();

    changeStyle('engine', ev.currentTarget.id);

    this.props.dispatch(changeEngine(ev.currentTarget.id));
  }

  render() {
    return (
            <div className="item">
              <h2>Silnik</h2>

              <div className="card-deck">

                <div id="engine1" className="card card-main engine" onClick={this.handleChangeEngine}>
                  <img src={engine1} className="card-img-top" alt="engine1" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Silnik 1</p>
                  </div>
                  <div className="card-footer text-right">10000$</div>
                </div>

                <div id="engine2" className="card card-main engine" onClick={this.handleChangeEngine}>
                  <img src={engine2} className="card-img-top" alt="engine2" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Silnik 2</p>
                  </div>
                  <div className="card-footer text-right">15000$</div>
                </div>

                <div id="engine3" className="card card-main engine" onClick={this.handleChangeEngine}>
                  <img src={engine3} className="card-img-top" alt="engine3" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Silnik 3</p>
                  </div>
                  <div className="card-footer text-right">20000$</div>
                </div>
              </div>

              <button className="btn btn-primary ml-auto m-4" type="button" onClick={this.handleChangeCurrent}>Submit</button>
              
            </div>
    )
  }
}

class Car_p extends Component {
  constructor(props) {
    super(props);

    this.handleChangePaint = this.handleChangePaint.bind(this);
    this.handleChangeCurrent = this.handleChangeCurrent.bind(this);
    
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChangeCurrent(ev) {
    ev.preventDefault();

    this.props.dispatch(changeCurrent('rims_p'));
  }

  handleChangePaint(ev) {
    ev.preventDefault();

    changeStyle('paint', ev.currentTarget.id);

    this.props.dispatch(changePaint(ev.currentTarget.id));
  }  

  render() {
    return (
      <div className="item">
      <h2>Lakier nadwozia</h2>

      <div className="card-deck">

        <div id="paint1" className="card card-main paint" onClick={this.handleChangePaint}>
          <img src={c_paint1} className="card-img-top" alt="c_paint1" width="150"/>
          <div className="card-body">
            <p className="card-text">Lakier 1</p>
          </div>
          <div className="card-footer text-right">300$</div>
        </div>

        <div id="paint2" className="card card-main paint" onClick={this.handleChangePaint}>
          <img src={c_paint2} className="card-img-top" alt="c_paint2" width="150"/>
          <div className="card-body">
            <p className="card-text">Lakier 2</p>
          </div>
          <div className="card-footer text-right">1000$</div>
        </div>

        <div id="paint3" className="card card-main paint" onClick={this.handleChangePaint}>
          <img src={c_paint3} className="card-img-top" alt="c_paint3" width="150"/>
          <div className="card-body">
            <p className="card-text">Lakier 3</p>
          </div>
          <div className="card-footer text-right">1500$</div>
        </div>
      </div>
      <button className="btn btn-primary ml-auto m-4" type="button" onClick={this.handleChangeCurrent}>Submit</button>
    </div>
    )
  }
}

class Rims_p extends Component {
  constructor(props) {
    super(props);

    this.handleChangeRimsPaint = this.handleChangeRimsPaint.bind(this);
    this.handleChangeCurrent = this.handleChangeCurrent.bind(this);
    
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChangeCurrent(ev) {
    ev.preventDefault();

    this.props.dispatch(changeCurrent('rims_s'));
  }

  handleChangeRimsPaint(ev) {
    ev.preventDefault();

    changeStyle('rims_p', ev.currentTarget.id);

    this.props.dispatch(changeRimsPaint(ev.currentTarget.id));
  }  

  render() {
    return (
      <div className="item">
              <h2>Lakier obręczy</h2>

              <div className="card-deck">

                <div id="rims_p1" className="card card-main rims_p" onClick={this.handleChangeRimsPaint}>
                  <img src={r_paint1} className="card-img-top" alt="r_paint1" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Lakier obręczy 1</p>
                  </div>
                  <div className="card-footer text-right">400$</div>
                </div>

                <div id="rims_p2" className="card card-main rims_p" onClick={this.handleChangeRimsPaint}>
                  <img src={r_paint2} className="card-img-top" alt="r_paint2" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Lakier obręczy 2</p>
                  </div>
                  <div className="card-footer text-right">800$</div>
                </div>

                <div id="rims_p3" className="card card-main rims_p" onClick={this.handleChangeRimsPaint}>
                  <img src={r_paint3} className="card-img-top" alt="r_paint3" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Lakier obręczy 3</p>
                  </div>
                  <div className="card-footer text-right">1400$</div>
                </div>
              </div>
              <button className="btn btn-primary ml-auto m-4" type="button" onClick={this.handleChangeCurrent}>Submit</button>
            </div>
    )
  }
}

class Rims_s extends Component {
  constructor(props) {
    super(props);

    this.handleChangeRimsSize = this.handleChangeRimsSize.bind(this);
    this.handleChangeCurrent = this.handleChangeCurrent.bind(this);

  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChangeCurrent(ev) {
    ev.preventDefault();

    this.props.dispatch(changeCurrent('seats'));
  }

  handleChangeRimsSize(ev) {
    ev.preventDefault();

    changeStyle('rims_s', ev.currentTarget.id);

    this.props.dispatch(changeRimsSize(ev.currentTarget.id));
  }  

  render() {
    return (
      <div className="item">
              <h2>Rozmiar obręczy</h2>

              <div className="card-deck">

                <div id="rims_s1" className="card card-main rims_s" onClick={this.handleChangeRimsSize}>
                  <img src={rims} className="card-img-top" alt="rims" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Rozmiar 1</p>
                  </div>
                  <div className="card-footer text-right">800$</div>
                </div>

                <div id="rims_s2" className="card card-main rims_s" onClick={this.handleChangeRimsSize}>
                  <img src={rims} className="card-img-top" alt="rims" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Rozmiar 2</p>
                  </div>
                  <div className="card-footer text-right">1200$</div>
                </div>

                <div id="rims_s3" className="card card-main rims_s" onClick={this.handleChangeRimsSize}>
                  <img src={rims} className="card-img-top" alt="rims" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Rozmiar 3</p>
                  </div>
                  <div className="card-footer text-right">1800$</div>
                </div>
              </div>
              <button className="btn btn-primary ml-auto m-4" type="button" onClick={this.handleChangeCurrent}>Submit</button>
            </div>
    )
  }
}

class Seats extends Component {
  constructor(props) {
    super(props);

    this.handleChangeSeats = this.handleChangeSeats.bind(this);
    this.handleChangeCurrent = this.handleChangeCurrent.bind(this);

  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChangeCurrent(ev) {
    ev.preventDefault();

    this.props.dispatch(changeCurrent('upholstery'));
  }

  handleChangeSeats(ev) {
    ev.preventDefault();

    changeStyle('seats', ev.currentTarget.id);

    this.props.dispatch(changeSeats(ev.currentTarget.id));
  } 

  render() {
    return (
      <div className="item">
              <h2>Typ foteli</h2>

              <div className="card-deck">

                <div id="seats1" className="card card-main seats" onClick={this.handleChangeSeats}>
                  <img src={seat1} className="card-img-top" alt="seat1" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Typ foteli 1</p>
                  </div>
                  <div className="card-footer text-right">2000$</div>
                </div>

                <div id="seats2" className="card card-main seats" onClick={this.handleChangeSeats}>
                  <img src={seat2} className="card-img-top" alt="seat2" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Typ foteli 2</p>
                  </div>
                  <div className="card-footer text-right">3000$</div>
                </div>

                <div id="seats3" className="card card-main seats" onClick={this.handleChangeSeats}>
                  <img src={seat3} className="card-img-top" alt="seat3" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Typ foteli 3</p>
                  </div>
                  <div className="card-footer text-right">4500$</div>
                </div>
              </div>
              <button className="btn btn-primary ml-auto m-4" type="button" onClick={this.handleChangeCurrent}>Submit</button>
            </div>
    )
  }
}

class Upholstery extends Component {
  constructor(props) {
    super(props);

    this.handleChangeUpholstery = this.handleChangeUpholstery.bind(this);
    this.handleChangeCurrent = this.handleChangeCurrent.bind(this);

  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChangeCurrent(ev) {
    ev.preventDefault();

    this.props.dispatch(changeCurrent('additional'));
  }

  handleChangeUpholstery(ev) {
    ev.preventDefault();

    changeStyle('upholstery', ev.currentTarget.id);

    this.props.dispatch(changeUpholstery(ev.currentTarget.id));
  } 

  render() {
    return (
      <div className="item">
              <h2>Kolor tapicerki</h2>

              <div className="card-deck">

                <div id="upholstery1" className="card card-main upholstery" onClick={this.handleChangeUpholstery}>
                  <img src={uph1} className="card-img-top" alt="uph1" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Kolor tapicerki 1</p>
                  </div>
                  <div className="card-footer text-right">500$</div>
                </div>

                <div id="upholstery2" className="card card-main upholstery" onClick={this.handleChangeUpholstery}>
                  <img src={uph2} className="card-img-top" alt="uph2" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Kolor tapicerki 2</p>
                  </div>
                  <div className="card-footer text-right">600$</div>
                </div>

                <div id="upholstery3" className="card card-main upholstery" onClick={this.handleChangeUpholstery}>
                  <img src={uph3} className="card-img-top" alt="uph3" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Kolor tapicerki 3</p>
                  </div>
                  <div className="card-footer text-right">700$</div>
                </div>
              </div>
              <button className="btn btn-primary ml-auto m-4" type="button" onClick={this.handleChangeCurrent}>Submit</button>
            </div>
    )
  }
}

class Additional extends Component {
  constructor(props) {
    super(props);

    this.handleAddAdditional = this.handleAddAdditional.bind(this);
    this.handleChangeCurrent = this.handleChangeCurrent.bind(this);

  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChangeCurrent(ev) {
    ev.preventDefault();

    this.props.dispatch(changeCurrent('summary'));
  }

  handleAddAdditional(ev) {
    ev.preventDefault();

    changeStyleMultiple(ev.currentTarget.id);

    this.props.dispatch(addAdditional(ev.currentTarget.id));
  }

  render() {
    return (
      <div className="item">
              <h2>Dodatkowe wyposażenie</h2>

              <div className="card-deck">

                <div id="additional1" className="card card-main additional" onClick={this.handleAddAdditional}>
                  <img src={led} className="card-img-top" alt="led" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Dynamiczne reflektory LED</p>
                  </div>
                  <div className="card-footer text-right">2000$</div>
                </div>

                <div id="additional2" className="card card-main additional" onClick={this.handleAddAdditional}>
                  <img src={audio} className="card-img-top" alt="audio" width="150"/>
                  <div className="card-body">
                    <p className="card-text">System dźwiękowy premium</p>
                  </div>
                  <div className="card-footer text-right">1500$</div>
                </div>

                <div id="additional3" className="card card-main additional" onClick={this.handleAddAdditional}>
                  <img src={sus} className="card-img-top" alt="sus" width="150"/>
                  <div className="card-body">
                    <p className="card-text">Zawieszenie sportowe</p>
                  </div>
                  <div className="card-footer text-right">5000$</div>
                </div>
              </div>
              <button className="btn btn-primary ml-auto m-4" type="button" onClick={this.handleChangeCurrent}>Submit</button>
            </div>
    )
  }
}

class Summary extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    let sum = 50000;

    let eng = null;
    switch(this.props.engine.engine) {
      case "engine1":
        eng = <div className="col-4 mb-2">
          <div id="engine1" className="card engine" onClick={this.handleChangeEngine}>
          <img src={engine1} className="card-img-top" alt="engine1" width="150"/>
          <div className="card-body">
            <p className="card-text">Silnik 1</p>
          </div>
          <div className="card-footer text-right">10000$</div>
        </div></div>;
        sum += 10000;
        break;
      case "engine2":
        eng = <div className="col-4 mb-2">
        <div id="engine2" className="card engine" onClick={this.handleChangeEngine}>
          <img src={engine2} className="card-img-top" alt="engine2" width="150"/>
          <div className="card-body">
            <p className="card-text">Silnik 2</p>
          </div>
          <div className="card-footer text-right">15000$</div>
        </div></div>;
        sum += 15000;
        break;
      case "engine3":
        eng = <div className="col-4 mb-2">
        <div id="engine3" className="card engine" onClick={this.handleChangeEngine}>
          <img src={engine3} className="card-img-top" alt="engine3" width="150"/>
          <div className="card-body">
            <p className="card-text">Silnik 3</p>
          </div>
          <div className="card-footer text-right">20000$</div>
        </div></div>;
        sum += 20000;
          break;
      default:
        eng = null;
    }

    let paint = null;
    switch(this.props.paint.paint) {
      case "paint1":
        paint = <div className="col-4 mb-2">
        <div id="paint1" className="card paint" onClick={this.handleChangePaint}>
        <img src={c_paint1} className="card-img-top" alt="c_paint1" width="150"/>
        <div className="card-body">
          <p className="card-text">Lakier 1</p>
        </div>
        <div className="card-footer text-right">300$</div>
      </div></div>;
      sum += 300;
        break;
      case "paint2":
        paint = <div className="col-4 mb-2">
        <div id="paint2" className="card paint" onClick={this.handleChangePaint}>
        <img src={c_paint2} className="card-img-top" alt="c_paint2" width="150"/>
        <div className="card-body">
          <p className="card-text">Lakier 2</p>
        </div>
        <div className="card-footer text-right">1000$</div>
      </div></div>;
      sum += 1000;
        break;
      case "paint3":
        paint = <div className="col-4 mb-2">
        <div id="paint3" className="card paint" onClick={this.handleChangePaint}>
        <img src={c_paint3} className="card-img-top" alt="c_paint3" width="150"/>
        <div className="card-body">
          <p className="card-text">Lakier 3</p>
        </div>
        <div className="card-footer text-right">1500$</div>
      </div></div>;
      sum += 1500;
        break;
      default:
        paint = null;
    }

    let rims_p = null;
    switch(this.props.rims_paint.rims_paint) {
      case "rims_p1":
        rims_p = <div className="col-4 mb-2">
        <div id="rims_p1" className="card rims_p" onClick={this.handleChangeRimsPaint}>
        <img src={r_paint1} className="card-img-top" alt="r_paint1" width="150"/>
        <div className="card-body">
          <p className="card-text">Lakier obręczy 1</p>
        </div>
        <div className="card-footer text-right">400$</div>
      </div></div>;
      sum += 400;
        break;
      case "rims_p2":
        rims_p = <div className="col-4 mb-2">
        <div id="rims_p2" className="card rims_p" onClick={this.handleChangeRimsPaint}>
        <img src={r_paint2} className="card-img-top" alt="r_paint2" width="150"/>
        <div className="card-body">
          <p className="card-text">Lakier obręczy 2</p>
        </div>
        <div className="card-footer text-right">800$</div>
      </div></div>;
      sum += 800;
        break;
      case "rims_p3":
        rims_p = <div className="col-4 mb-2">
        <div id="rims_p3" className="card rims_p" onClick={this.handleChangeRimsPaint}>
        <img src={r_paint3} className="card-img-top" alt="r_paint3" width="150"/>
        <div className="card-body">
          <p className="card-text">Lakier obręczy 3</p>
        </div>
        <div className="card-footer text-right">1400$</div>
      </div></div>;
      sum += 1400;
        break;
      default:
        rims_p = null;
    }

    let rims_s = null;
    switch(this.props.rims_size.rims_size) {
      case "rims_s1":
        rims_s = <div className="col-4 mb-2">
        <div id="rims_s1" className="card rims_s" onClick={this.handleChangeRimsSize}>
        <img src={rims} className="card-img-top" alt="rims" width="150"/>
        <div className="card-body">
          <p className="card-text">Rozmiar 1</p>
        </div>
        <div className="card-footer text-right">800$</div>
      </div></div>;
      sum += 800;
        break;
      case "rims_s2":
        rims_s = <div className="col-4 mb-2">
        <div id="rims_s2" className="card rims_s" onClick={this.handleChangeRimsSize}>
        <img src={rims} className="card-img-top" alt="rims" width="150"/>
        <div className="card-body">
          <p className="card-text">Rozmiar 2</p>
        </div>
        <div className="card-footer text-right">1200$</div>
      </div></div>;
      sum += 1200;
        break;
      case "rims_s3":
        rims_s = <div className="col-4 mb-2">
        <div id="rims_s3" className="card rims_s" onClick={this.handleChangeRimsSize}>
        <img src={rims} className="card-img-top" alt="rims" width="150"/>
        <div className="card-body">
          <p className="card-text">Rozmiar 3</p>
        </div>
        <div className="card-footer text-right">1800$</div>
      </div></div>;
      sum += 1800;
        break;
      default:
        rims_s = null;
    }

    let seats = null;
    switch(this.props.seats.seats) {
      case "seats1":
        seats = <div className="col-4 mb-2">
        <div id="seats1" className="card seats" onClick={this.handleChangeSeats}>
        <img src={seat1} className="card-img-top" alt="seat1" width="150"/>
        <div className="card-body">
          <p className="card-text">Typ foteli 1</p>
        </div>
        <div className="card-footer text-right">2000$</div>
      </div></div>;
      sum += 2000;
        break;
      case "seats2":
        seats = <div className="col-4 mb-2">
        <div id="seats2" className="card seats" onClick={this.handleChangeSeats}>
        <img src={seat2} className="card-img-top" alt="seat2" width="150"/>
        <div className="card-body">
          <p className="card-text">Typ foteli 2</p>
        </div>
        <div className="card-footer text-right">3000$</div>
      </div></div>;
      sum += 3000;
        break;
      case "seats3":
        seats = <div className="col-4 mb-2">
        <div id="seats3" className="card seats" onClick={this.handleChangeSeats}>
        <img src={seat3} className="card-img-top" alt="seat3" width="150"/>
        <div className="card-body">
          <p className="card-text">Typ foteli 3</p>
        </div>
        <div className="card-footer text-right">4500$</div>
      </div></div>;
      sum += 4500;
        break;
      default:
        seats = null;
    }

    let upholstery = null;
    switch(this.props.upholstery.upholstery) {
      case "upholstery1":
        upholstery = <div className="col-4 mb-2">
        <div id="upholstery1" className="card upholstery" onClick={this.handleChangeUpholstery}>
        <img src={uph1} className="card-img-top" alt="uph1" width="150"/>
        <div className="card-body">
          <p className="card-text">Kolor tapicerki 1</p>
        </div>
        <div className="card-footer text-right">500$</div>
      </div></div>;
      sum += 500;
        break;
      case "upholstery2":
        upholstery = <div className="col-4 mb-2">
        <div id="upholstery2" className="card upholstery" onClick={this.handleChangeUpholstery}>
        <img src={uph2} className="card-img-top" alt="uph2" width="150"/>
        <div className="card-body">
          <p className="card-text">Kolor tapicerki 2</p>
        </div>
        <div className="card-footer text-right">600$</div>
      </div></div>;
      sum += 600;
        break;
      case "upholstery3":
        upholstery = <div className="col-4 mb-2">
        <div id="upholstery3" className="card upholstery" onClick={this.handleChangeUpholstery}>
        <img src={uph3} className="card-img-top" alt="uph3" width="150"/>
        <div className="card-body">
          <p className="card-text">Kolor tapicerki 3</p>
        </div>
        <div className="card-footer text-right">700$</div>
      </div></div>;
      sum += 700;
        break;
      default:
        upholstery = null;
    }

    let additional1 = null;
    let additional2 = null;
    let additional3 = null;
    for (let i in this.props.additional.arr) {
      if (this.props.additional.arr[i] == "additional1") {
        additional1 = <div className="col-4 mb-2">
        <div id="additional1" className="card additional" onClick={this.handleAddAdditional}>
        <img src={led} className="card-img-top" alt="led" width="150"/>
        <div className="card-body">
          <p className="card-text">Dynamiczne reflektory LED</p>
        </div>
        <div className="card-footer text-right">2000$</div>
      </div></div>;
      sum += 2000;
      } else if (this.props.additional.arr[i] == "additional2") {
        additional2 = <div className="col-4 mb-2">
        <div id="additional2" className="card additional" onClick={this.handleAddAdditional}>
        <img src={audio} className="card-img-top" alt="audio" width="150"/>
        <div className="card-body">
          <p className="card-text">System dźwiękowy premium</p>
        </div>
        <div className="card-footer text-right">1500$</div>
      </div></div>;
      sum += 1500;
      } else if (this.props.additional.arr[i] == "additional3") {
        additional3 = <div className="col-4 mb-2">
        <div id="additional3" className="card additional" onClick={this.handleAddAdditional}>
        <img src={sus} className="card-img-top" alt="sus" width="150"/>
        <div className="card-body">
          <p className="card-text">Zawieszenie sportowe</p>
        </div>
        <div className="card-footer text-right">5000$</div>
      </div></div>;
      sum += 5000;
      }
    }

    return (
      <div  ref={this.myRef}>
        <h1>Podsumowanie</h1>
        <h3>Cena podstawowa: 50000$</h3>
        <h3>Dodatkowe opcje</h3>
        <div className="row">
            {eng}
            {paint}
            {rims_p}
            {rims_s}
            {seats}
            {upholstery}
            {additional1}
            {additional2}
            {additional3}
        </div>
        <h2 className="text-right mt-5 mb-5">Suma: {sum}$</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    engine: state.engine,
    paint: state.paint,
    rims_paint: state.rims_paint,
    rims_size: state.rims_size,
    upholstery: state.upholstery,
    seats: state.seats,
    additional: state.additional,
    current: state.current,
  };
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(App);