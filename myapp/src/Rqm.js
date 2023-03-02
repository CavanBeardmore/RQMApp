import React from "react";
import Styles from './Styles.scss'

class Rqm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0,
        quotes: [
          {quote: "Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.", author: '— Michael Scott'}, 
          {quote: "I talk a lot, so I've learned to just tune myself out...", author: '— Kelly Kapoor'},
          {quote: "I am Beyoncé always." , author: '— Michael Scott'},
          {quote: "I am running away from my responsibilities and it feels good.", author: '— Michael Scott'},
          {quote: "Should have burned this place down when I had the chance.", author: '— Michael Scott'},
          {quote: "One day Michael came in and complained about a speed bump on the highway. I wonder who he ran over then.", author: '— Jim Halpert'},
          {quote: "If I don't have some cake soon, I might die.", author: '— Stanley Hudson'},
          {quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.", author: ' — Michael Scott'},
          {quote: "Whenever I'm about to do something, I think, 'Would an idiot do that?' and if they would, I do not do that thing.", author: '— Dwight Schrute'},
          {quote: "I'm not superstitious, but I am a little stitious.", author: '— Michael Scott'},
          {quote: "Bears, beets, Battlestar Galactica.", author: '— Jim Halpert'},
          {quote: "An office is a place where dreams come true.", author: '— Michael Scott'},
          {quote: "I wish there was a way to know you're in the good old days before you've actually left them.", author: '— Andy Bernard'}
        ]
      }

      this.handleClick = this.handleClick.bind(this);

    }

    //everytime the button is clicked it increments state by 1
    handleClick(){
      this.setState({
        index: Math.floor(Math.random() * this.state.quotes.length)
      });
    }

    render(){

      const insertedQuote = this.state.quotes[this.state.index].quote;
      const insertedAuthor = this.state.quotes[this.state.index].author;
      
        return (
          <body className="body-bg">
          <header className="title">
            <h1 className="title">The Office Quote Generator</h1> 
          </header>
          <br />
          <div className="quote-box"> 
            <h2 className="main-quote">"{insertedQuote}"</h2>
            <p className="author">{insertedAuthor}</p>
            <button className="next-button btn btn-primary " onClick={this.handleClick}> Next Quote </button>
            <button className="quote-tweet btn btn-primary"> Tweet Quote </button>
          </div>
          </body>
        )
    };
  };


  export default Rqm;