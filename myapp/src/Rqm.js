import React from "react";
import Styles from './Styles.scss'

class Rqm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0
      }

      this.handleClick = this.handleClick.bind(this);

    }
    //everytime the button is clicked it increments state by 1
    handleClick(){
      this.setState({
        index: this.state.index + 1
      });
    }

    render(){
      const quotesArray = [
        {quote: 'quote here ', author: '- author'}, 
        {quote: 'quote here 1', author: '- author 1'}
      ];
      const insertedQuote = quotesArray[this.state.index].quote;
      const insertedAuthor = quotesArray[this.state.index].author;
        return (
          <body>
          <header className="title">
            <h1>Random Quote Generator</h1> 
          </header>
          <div className="quote-box"> 
            <h2 className="main-quote">{insertedQuote}</h2>
            <p className="author">{insertedAuthor}</p>
            <button className="next-button" onClick={this.handleClick}> Next Quote </button>
          </div>
          </body>
        )
    };
  };


  export default Rqm;