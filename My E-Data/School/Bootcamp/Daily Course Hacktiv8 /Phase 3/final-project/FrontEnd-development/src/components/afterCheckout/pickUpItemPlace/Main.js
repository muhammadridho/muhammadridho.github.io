
import React  from 'react';
import { Container } from 'native-base';
import { View, ScrollView } from 'react-native';

import MapContainer from './MapContainer';
import ButtonPickerPlace from './ButtonPickerPlace';

const styles = {
  main: {
    alignItems: 'center',
  }
};

class PickUpPlace extends React.Component {
  render() {

    return (
      <Container>
        <View style={styles.main}>
          <MapContainer />
        </View>
        <ButtonPickerPlace />
      </Container>
    );
  }
}

export default PickUpPlace
