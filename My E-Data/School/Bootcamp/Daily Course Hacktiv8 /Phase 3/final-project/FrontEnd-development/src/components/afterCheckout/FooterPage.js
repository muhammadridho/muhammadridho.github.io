import React, { Component } from 'react';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';
import { connect } from 'react-redux'
import { changePageStep } from '../../actions/'

class FooterCart extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <Footer >
        <FooterTab>
          {this.props.currentPage == 5
            ? <Button onPress={ () => console.log("Back to Home") }>
                <Text style={{fontSize: 14}}>Back to Home</Text>
              </Button>
            : <Button onPress={ () => this.props.changePageStep() }>
                <Text style={{fontSize: 14}}>Next</Text>
              </Button>
          }
        </FooterTab>
      </Footer>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPage : state.step.page
})

const mapDispatchToProps = (dispatch) => ({
  changePageStep : () => dispatch(changePageStep())
})

export default connect(mapStateToProps, mapDispatchToProps)(FooterCart)
