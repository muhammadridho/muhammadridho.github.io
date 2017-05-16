import React from 'react'
import { connect } from 'react-redux'
import { ListView,TouchableHighlight, Text, View } from 'react-native'
import { removeFromChart } from '../../actions/'
import Swipeable from 'react-native-swipeable';
import ChartItem from './ChartItem'

const leftContent = <Text>Pull to activate</Text>;

const rightButtons = [
  <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>
];

class ChartList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ds : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  removeItem(id){
    this.props.removeFromChart(id)
  }

  render(){
    const dataSource = this.state.ds.cloneWithRows(this.props.charts)
    return (
      <ListView
        style={{flex : 1}}
        dataSource={dataSource}
        renderRow={(rowData) => <ChartItem data={rowData} removeFromChart={this.removeItem.bind(this)}/>}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  charts : state.charts.cartItems
})

const mapDispatchToProps = (dispatch) => ({
  removeFromChart : (payload) => dispatch(removeFromChart(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChartList)
