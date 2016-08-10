var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

var Picker = React.createClass({
  displayName: 'Example',

  getInitialState: function() {
    return {
      startDate: moment()
    };
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });
  },

  render: function() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} />;
  }
});

// stateless component function, can use arrow function
var About =  (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a web application using react.</p>
      <p>Here are some tools</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - Was the framework used.
          </li>
          <li>
            <a href="https://openweathermap.org">Open Weather Map</a> - This was used to search for weather data by city name.
          </li>
        </ul>
      <Picker/>
    </div>
  )
} ;

module.exports = About;
