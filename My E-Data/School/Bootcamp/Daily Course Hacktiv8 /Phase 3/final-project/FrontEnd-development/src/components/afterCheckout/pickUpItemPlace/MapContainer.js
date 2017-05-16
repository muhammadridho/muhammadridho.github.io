import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';

import { connect } from 'react-redux'
import { changeTransport, getPublicPlaces } from '../../../actions'

import getRegionForCoordinates from './deltaGenerator';

exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function(): React.Element<any> {
      return <GeolocationExample />;
    },
  }
];

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 300
  }
});

// data awal diisi dengan current location device
let coordsData = [{
  latitude: 37.78825,
  longitude: -122.4324
}]

const { latitude, longitude, latitudeDelta, longitudeDelta  } = getRegionForCoordinates(coordsData)


class MapContainer extends React.Component {



  watchID: ?number = null;

  constructor(props){
    super(props)

    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown'
    };
  }

  getCity(latitude,longitude){
      var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="
     +latitude+","+longitude+"&sensor=false"
     var self = this
    axios.get(url).then((response) => {
      var city = ''
      var state = ''
      var results = response.data.results
      for (var i = 0; i < results.length; i++) {
           if (results[i].types[0] === "administrative_area_level_1") {
              city = results[i].address_components[0].short_name;
           }
         }
         self.props.getPublicPlaces(city)
    }).catch((err) => console.log(err))
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({initialPosition : position});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: false, timeout: 100000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {

      this.setState({lastPosition : position});
      this.getCity(this.state.lastPosition.coords.latitude, this.state.lastPosition.coords.longitude)
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {

    return (
      <View>
        { this.state.lastPosition === 'unknown'
          ? <Text>Tunggu</Text>
          :
          <MapView
            style={styles.container}
            region={{
              latitude: +this.props.selectedPlace.lat || this.state.lastPosition.coords.latitude,
              longitude: +this.props.selectedPlace.lng || this.state.lastPosition.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <MapView.Marker
              coordinate={{
                latitude: +this.props.selectedPlace.lat || this.state.lastPosition.coords.latitude,
                longitude: +this.props.selectedPlace.lng || this.state.lastPosition.coords.longitude,
              }}
              title={"marker.name"}
            />
              <MapView.Callout>

              </MapView.Callout>
            </MapView>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  picker : state.pickUpPlace,
  selectedPlace: state.pickUpPlace.selected
})

const mapDispatchToProps = (dispatch) => ({
  getPublicPlaces : (cityName) => dispatch(getPublicPlaces(cityName))
})

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)

// this.state.lastPosition.coords.longitude
