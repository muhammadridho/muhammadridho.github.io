import React, { Component } from 'react';
import {
  Container,
  Text,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button,
  Content,
  Subtitle,
  View
} from 'native-base';
import { connect } from 'react-redux'

class HeaderCart extends Component {
  render() {
    return (

        <Header>
          <Body>
              <Title>{this.props.labels[this.props.currentPage - 1]}</Title>
          </Body>
        </Header>


    );
  }
}

const mapStateToProps = (state) => ({
  currentPage : state.step.page,
  labels : state.step.labels
})

export default connect(mapStateToProps, null)(HeaderCart)
