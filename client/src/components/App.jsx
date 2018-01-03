import React from 'react';


var style = {
	color:'red',
	backgroundColor:'black',
  fontWeight:'bold',
  paddingTop: 50,
  paddingLeft: 20,
  paddingRight: 20,
};


class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      p1: '',
      p2: '',
      p3: '',
      p4: '',
      p5: '',
      p6: '',
      p7: '',
      p8: '',
      p9: '',
      player1: true, 
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.state.player1 ? this.setState({ [e.target.id]: 'O' }) : this.setState({ [e.target.id]: 'X' })
    this.state.player1 ? this.setState({ player1: false }) : this.setState({ player1: true })
  }
  
  render() {
    return(
      <div>
        Welcome to Tec Tac Toe!!
        <div>
          <button onClick={this.handleClick} id={'p1'} style={style} >{this.state.p1}</button>
          <button onClick={this.handleClick} id={'p2'} style={style} >{this.state.p2}</button>
          <button onClick={this.handleClick} id={'p3'} style={style} >{this.state.p3}</button>
        </div>
        <div>
          <button onClick={this.handleClick} id={'p4'} style={style} >{this.state.p4}</button>
          <button onClick={this.handleClick} id={'p5'} style={style} >{this.state.p5}</button>
          <button onClick={this.handleClick} id={'p6'} style={style} >{this.state.p6}</button>
        </div>
        <div>
          <button onClick={this.handleClick} id={'p7'} style={style} >{this.state.p7}</button>
          <button onClick={this.handleClick} id={'p8'} style={style} >{this.state.p8}</button>
          <button onClick={this.handleClick} id={'p9'} style={style} >{this.state.p9}</button>
        </div>
        <div>
          {this.state.p1 === 'O' && this.state.p2 === 'O' && this.state.p3 === 'O' ? 'Player1 Wins!!': ''}
          {this.state.p4 === 'O' && this.state.p5 === 'O' && this.state.p6 === 'O' ? 'Player1 Wins!!': ''}
          {this.state.p7 === 'O' && this.state.p8 === 'O' && this.state.p9 === 'O' ? 'Player1 Wins!!': ''}
          {this.state.p1 === 'O' && this.state.p4 === 'O' && this.state.p7 === 'O' ? 'Player1 Wins!!': ''}
          {this.state.p2 === 'O' && this.state.p5 === 'O' && this.state.p8 === 'O' ? 'Player1 Wins!!': ''}
          {this.state.p3 === 'O' && this.state.p6 === 'O' && this.state.p9 === 'O' ? 'Player1 Wins!!': ''}
          {this.state.p1 === 'O' && this.state.p5 === 'O' && this.state.p9 === 'O' ? 'Player1 Wins!!': ''}
          {this.state.p7 === 'O' && this.state.p5 === 'O' && this.state.p3 === 'O' ? 'Player1 Wins!!': ''}
          {this.state.p1 === 'X' && this.state.p2 === 'X' && this.state.p3 === 'X' ? 'Player2 Wins!!': ''}
          {this.state.p4 === 'X' && this.state.p5 === 'X' && this.state.p6 === 'X' ? 'Player2 Wins!!': ''}
          {this.state.p7 === 'X' && this.state.p8 === 'X' && this.state.p9 === 'X' ? 'Player2 Wins!!': ''}
          {this.state.p1 === 'X' && this.state.p4 === 'X' && this.state.p7 === 'X' ? 'Player2 Wins!!': ''}
          {this.state.p2 === 'X' && this.state.p5 === 'X' && this.state.p8 === 'X' ? 'Player2 Wins!!': ''}
          {this.state.p3 === 'X' && this.state.p6 === 'X' && this.state.p9 === 'X' ? 'Player2 Wins!!': ''}
          {this.state.p1 === 'X' && this.state.p5 === 'X' && this.state.p9 === 'X' ? 'Player2 Wins!!': ''}
          {this.state.p7 === 'X' && this.state.p5 === 'X' && this.state.p3 === 'X' ? 'Player2 Wins!!': ''}
        </div>
      </div>
    )
  }
}

export default App;