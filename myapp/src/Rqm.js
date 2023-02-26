import React from "react";
import './Rqm.scss'
import { connect } from 'react-redux';

class Rqm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ""
    }
    
    this.submitNext = this.submitNext.bind(this);
  }

  submitNext(){
    this.props.submitNext()
    this.setState({
      input: this.props
    })
  }

    render() {
        return (
          <div>
            <h1> "The only shots you miss are the ones you don't take. - Wayne Gretzky" - Michael Scott </h1>
            <p> "It's Britney bitch" - Michael G. Scott </p>

          </div>
   )}
  };

  const mapStateToProps = (state) => {
    return {
      input: state.input
    }
  }

  const mapDispatchToProps = (dispatch) => {
    submitNext: () => {
      dispatch(nextQuote())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Rqm);