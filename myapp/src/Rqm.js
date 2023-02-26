import React from "react";
import Styles from './Styles.scss'

class Rqm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0,
      }

      this.handleChange = this.handleChange.bind(this);

    }
    //everytime the button is clicked it increments state by 1
    handleChange(){
      this.setState({
        index: this.state.index + 1
      });
    }

    render(){

      const quotesArray = [
        {quote: 'quote here ', author: '- author'}, 
        {quote: 'quote here', author: '- author'}
      ]

      let insertedQuote = '';
      let insertedAuthor = '';

        return (
          <body>
          <header className="title"> Random Quote Generator </header>
          <div className="quote-box"> 
            <h1 className="main-quote"> 'Quote' {insertedQuote} </h1>
            <p className="author"> 'author' {insertedAuthor}</p>
            <button className="next-button" onClick={this.handleChange()}> Next Quote </button>
          </div>
          </body>
        )
    };
  };


  export default Rqm;