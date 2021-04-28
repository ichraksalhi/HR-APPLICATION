import React, { Component } from 'react';
//import Icofont from 'react-icofont';
import PropTypes from 'prop-types';
//import ScrollAnimation from 'react-animate-on-scroll';
import { getCalendar } from '../../../actions/calendarActions';
import { connect } from 'react-redux';
import axios from "axios";
import Header from '../../Layouts/Header';

class Calender extends Component {
  componentDidMount() {
    this.props.getCalendar();
    axios.get('http://localhost:5000/calendar')
      .then(response => {
        this.setState({ calendars: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    if(this.props.calendar.fileOne === null || this.props.calendar.fileOne === undefined )
    {
      this.props.calendar.fileOne="#";
    }
    if(this.props.calendar.fileTwo === null || this.props.calendar.fileTwo === undefined )
    {
      this.props.calendar.fileTwo="#";
    }
  }
  handleOneIsEmpty = event => {
    if (!this.props.calendar.fileOne) event.preventDefault();
  };
  handleTwoIsEmpty = event => {
    if (!this.props.calendar.fileTwo) event.preventDefault();
  };

  render() {
    return (
      <>
      <Header/>

      <React.Fragment>
        <section className="cta-area">
          <div className="diplay-table">
            <div className="display-table-cell">
              <div className="container">
              
                  <div className="row">
                    <div className="col-sm-6 col-md-7 col-lg-7">
                      <div className="cta-info">
                        <h2>{this.props.Title}</h2>
                        <p>{this.props.Section[0].Content}</p>

                        <div className="center-wrap">
                          <a onClick={this.handleOneIsEmpty}
                            href={this.props.calendar ? `http://localhost:5000/${this.props.calendar.fileOne}` : '#'}
                            className="btn-a"
                          >
                            <div className="button">
                              {this.props.Section[0].BtnName}
                             
                              <div className="mask" />
                            </div>
                          </a>
                        </div>
                        <p>{this.props.Section[1].Content}</p>

                        <div className="center-wrap">
                          <a onClick={this.handleTwoIsEmpty}
                            href={this.props.calendar ? `http://localhost:5000/${this.props.calendar.fileTwo}` : '#'}
                            className="btn-a"
                          >
                            <div className="button">
                              {this.props.Section[1].BtnName}
                             
                              <div className="mask" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                   
                  </div>
               
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
      </>
    );
  }
}

//Props Types
Calender.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
  BtnLink: PropTypes.string,
  BtnName: PropTypes.string,
 // Image: PropTypes.string
};

//Default Props
Calender.defaultProps = {
  Title: 'Calendrier ',
  //Image: require('../assets/img/calendar.png'),
  Section: [
    {
      Content: 'HR',
      BtnName: 'Télécharger'
    },
    {
      Content: 'Candidat',
      BtnName: 'Télécharger'
    }
  ]
};
const mapStateToProps = state => ({
  calendar: state.calendar.calendar,
  loading: state.calendar.loading
});

export default connect(
  mapStateToProps,
  { getCalendar }
)(Calender);
