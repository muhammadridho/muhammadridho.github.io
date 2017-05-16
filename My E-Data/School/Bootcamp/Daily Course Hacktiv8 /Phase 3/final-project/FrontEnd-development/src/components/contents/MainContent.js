import React from 'react'

import { Content, InputGroup, Input, Item , Icon ,Button} from 'native-base'
import { Text, TouchableOpacity, View,ScrollView, Label } from 'react-native'
import ViewPager from 'react-native-viewpager'
import CardContent from './CardContent.js'
import { connect } from 'react-redux'
import { searchKeywords } from '../../actions/'
import { filterUrlsByKeywords } from '../../selectors/'

class MainContent extends React.Component {
  constructor(props){
    super(props)
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    })

    this.state = {
      dataSource: dataSource.cloneWithPages(['Page 1', 'Page 2', 'Page 3','Page 4'])
    }

    // this.setPosition = this.setPosition.bind(this)

  }

  // setPosition(number){
  //   this.setState({currentPage : number})
  // }

  render(){
    return (
        <View style={styles.wrapper}>

        <ViewPager
  dataSource={this.state.dataSource}
  renderPage={this.renderViewPagerPage.bind(this)}
  onChangePage={(page) => {this.props.setPosition(page)}}
  renderPageIndicator={false}
  />
  </View>
    )
  }

  renderViewPagerPage(data){
    
    return(
    <View style={styles.page}>
    {this.props.state.currentPage == 0 && (
      <Content>

      <Item style={{width : '100%', height : 50, marginTop : 0, marginBottom : 5, backgroundColor: '#0D47A1', color : '#fff'}}floatingLabel>
          <Label color='#fff' style={{fontColor : '#fff'}}>Username</Label>
         <Input style={{color : '#fff', fontSize : 14, marginTop : -10, marginLeft : 30}} onChangeText={(text) => this.props.searchKeywords(text)}placeholder='Search Foods ...' placeholderTextColor='#fff'/>
     </Item>
     <Button style={{position : 'absolute', top : 5, right : 30}}transparent primary iconLeft>
      <Icon style={{color :'#fff'}} name='md-search' />
      </Button>
          <CardContent items={this.props.foods}/>
      </Content>
    )}
    {this.props.state.currentPage == 1 && (
      <Content>
      <Item style={{width : '100%', height : 50, marginTop : 0, marginBottom : 5, backgroundColor: '#0D47A1', color : '#fff'}}floatingLabel>
          <Label color='#fff' style={{fontColor : '#fff'}}>Username</Label>
         <Input style={{color : '#fff', fontSize : 14, marginTop : -10, marginLeft : 30}} onChangeText={(text) => this.props.searchKeywords(text)} placeholder='Search Snacks ...' placeholderTextColor='#fff'/>
     </Item>
     <Button style={{position : 'absolute', top : 5, right : 30}}transparent primary iconLeft>
      <Icon style={{color :'#fff'}} name='md-search' />
      </Button>
        <CardContent items={this.props.snacks}/>

      </Content>
    )}
    {this.props.state.currentPage == 2 && (
        <Content>

        </Content>
    )}
    </View>

  )}
}

const styles = {
  page: {
  flex:1,
  justifyContent:'center',
  width : '100%'
},
wrapper : {
  backgroundColor : '#FAFAFA',
 flex: 1
}
}

const mapStateToProps = (state) => ({
  foods : filterUrlsByKeywords(state.foods,state.search),
  snacks : filterUrlsByKeywords(state.snacks,state.search),
})

const mapDispatchToProps = (dispatch) => ({
   searchKeywords : (keywords) => dispatch(searchKeywords(keywords))
})

// export const MainFrame = MainContent
export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
