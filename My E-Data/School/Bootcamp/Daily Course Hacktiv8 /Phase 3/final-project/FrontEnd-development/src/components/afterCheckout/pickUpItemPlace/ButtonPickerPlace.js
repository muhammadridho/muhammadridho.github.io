import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Picker,
  Card,
  CardItem,
  Right
} from 'native-base';
import {View, ScrollView, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { selectPlace, changeTransport } from '../../../actions'


class PlaceButton extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return (
    <View style={{marginTop: 10 }}>
      <View style={{flexWrap:'wrap', flexDirection :'row', alignItems: 'center'}}>
        <Button
          small
          bordered
          primary
          onPress={ () => this.props.changeTransport('AIRP') }
        >
        <Icon name='plane' />
        </Button>
        <Button
          small
          bordered
          primary
          onPress={ () => this.props.changeTransport('RSTN') }
        >
          <Icon name='train' />
        </Button>
        <Button
          small
          bordered
          primary
          onPress={ () => this.props.changeTransport('HTL') }
        >
          <Icon name='home' />
        </Button>
      </View>
      {
        !this.props.picker.transportType
        ? <View><Text>Pick Location</Text></View>
        : <ScrollView
            automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}
          >
            <View style={{flex : 1}}>
              {
                this.props.picker.pickUpList.map((item, index) =>
                  {
                    return (this.props.picker.transportType === item.fcode)
                    ?
                      <TouchableOpacity key={index} onPress={() => this.props.selectPlace(item)}>
                        <Card>
                          <CardItem>
                            {
                              item.fcode === "RSTN"
                              ? <Icon active name={"train"} />
                              : (item.fcode === "AIRP"
                              ? <Icon active name={"plane"} />
                              : <Icon active name={"home"} /> )
                            }
                             <Text>{item.name}</Text>
                          </CardItem>
                        </Card>
                      </TouchableOpacity>
                    : true
                  }
                )
              }
            </View>
          </ScrollView>
      }
    </View>
    );
  }
}

const mapStateToProps = (state) => ({
  picker : state.pickUpPlace
})

const mapDispatchToProps = (dispatch) => ({
  selectPlace : (data) => dispatch(selectPlace(data)),
  changeTransport : (data) => dispatch(changeTransport(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaceButton)
