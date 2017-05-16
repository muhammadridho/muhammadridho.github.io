import React, { Component } from 'react';
import { AppRegistry,StyleSheet,View, Text } from 'react-native';
import ViewPager from 'react-native-viewpager';
import StepIndicator from 'react-native-step-indicator';
import { connect } from 'react-redux'

const PAGES = ['Page 1','Page 2','Page 3','Page 4','Page 5','Page 6'];

const indicatorStyles = {
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#7eaec4',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#7eaec4',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#7eaec4',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#7eaec4',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  currentStepLabelColor: '#7eaec4',
  labelSize: 9,
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 20,
}

const styles = StyleSheet.create({
  stepIndicator: {
    marginVertical:5,
  },
  container : {
    marginTop: 5,
    marginBottom: 5,
  },
  page: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});


class StepIdicatorBar extends Component {

  constructor() {
    super();
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
    this.state = {
      dataSource: dataSource.cloneWithPages(PAGES),
      currentPage:0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={indicatorStyles}
            currentPosition={this.props.currentPage-1}
            labels={this.props.labels}
            stepCount={5}
           />
        </View>
      </View>
    );
  }

  renderViewPagerPage = (data) => {
    return(<View style={styles.page}>
      <Text>{data}</Text>
    </View>)
  }
}

const mapStateToProps = (state) => ({
  currentPage : state.step.page,
  labels : state.step.labels
})

const mapDispatchToProps = (dispatch) => ({
  changePageStep : () => dispatch(changePageStep())
})

export default connect(mapStateToProps, mapDispatchToProps)(StepIdicatorBar)
