const styles = {
  wrapper : {
    backgroundColor : '#0D47A1',
   flex: 1
  },
  container : {
    padding : 20
  },
  title : {
    color : 'white',
    fontSize : 15,
    fontWeight : '200',
    textAlign : 'center',
    opacity : 0.9
  },
  titleContent : {
    color : '#FFC107',
    fontWeight : '800',
    opacity : 0.8,
    fontSize : 25
  },
  subtitle : {
    color : 'white',
    fontWeight : '200',
    paddingBottom : 20
  },
  titleWrapper : {
    flex : 1,
    justifyContent : 'center'
  },
  logoContainer : {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent : 'center'
  },
  logo : {
    width: 128,
    height : 128
  },
  placeholderImage : {
    width: 320,
    height : 210
  },
  input : {
    height : 40,
    backgroundColor : 'rgba(255,255,255,0.2)',
    marginBottom : 20,
    color : '#FFF',
    paddingHorizontal : 10,
    borderColor : 'transparent',
    borderBottomColor: '#fff'
  },
  inputContent : {
    height : 120,
    backgroundColor : 'rgba(255,255,255,0.2)',
    marginBottom : 20,
    color : '#FFF',
    paddingHorizontal : 10,
    borderColor : 'transparent',
    borderBottomColor: '#fff'
  },
  buttonContainer : {
    backgroundColor : '#BF360C',
    paddingVertical : 15,
    marginBottom: 15
  },
  facebookButton : {
    backgroundColor : '#3F51B5',
    paddingVertical : 15,
    marginBottom: 15
  },
  registerButton : {
    backgroundColor : '#4CAF50',
    paddingVertical : 15,
    marginBottom : 15
  },
  textHaveAccount : {
    color : '#fff',
    fontSize : 15
  },
  buttonText : {
    textAlign : 'center',
    color : '#fff'
  },
  avatarProfiles : {
    marginBottom : 12,
    width: 128,
    height : 128
  },
  stepIndicator: {
    marginVertical:50
  },
  page: {
    flex:1,
    justifyContent:'center',
    width : '100%',
    zindex : 9999
  },
  IndicatorStyles : {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
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
    labelColor: '#fff',
    labelSize: 13,
    currentStepLabelColor: '#fff'
  },
  modalFacebook : {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  }
}

export default styles
