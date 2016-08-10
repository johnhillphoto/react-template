var React = require('react');

//following uses explicit es6 destructuring of props
// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//
//   return (
//     <h3>It is {temp} in {location}</h3>
//   )
// }

//following uses shorthand for deconstructing props
var WeatherMessage = ({temp, location}) => {

  return (
    <h3 className="text-center">It is {temp} in {location}.</h3>
  )
}

module.exports = WeatherMessage;
