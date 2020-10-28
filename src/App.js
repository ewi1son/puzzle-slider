import React from 'react';
import Grid from './Grid';


export class App extends React.Component{
  constructor(){
    super();
    this.state = {
      tileData:[
        {id: 0, display: 0, currX: 1, currY:4, winX: 1, winY: 4, isBlank: true},
        {id: 1, display: 1, currX: 2, currY:4, winX: 2, winY: 4, isBlank: false},
        {id: 2, display: 2, currX: 3, currY:4, winX: 3, winY: 4, isBlank: false},
        {id: 3, display: 3, currX: 4, currY:4, winX: 4, winY: 4, isBlank: false},

        {id: 4, display: 4, currX: 1, currY:3, winX: 1, winY: 3, isBlank: false},
        {id: 5, display: 5, currX: 2, currY:3, winX: 2, winY: 3, isBlank: false},
        {id: 6, display: 6, currX: 3, currY:3, winX: 3, winY: 3, isBlank: false},
        {id: 7, display: 7, currX: 4, currY:3, winX: 4, winY: 3, isBlank: false},

        {id: 8, display: 8, currX: 1, currY:2, winX: 1, winY: 2, isBlank: false},
        {id: 9, display: 9, currX: 2, currY:2, winX: 2, winY: 2, isBlank: false},
        {id: 10, display: 10, currX: 3, currY:2, winX: 3, winY: 2, isBlank: false},
        {id: 11, display: 11, currX: 4, currY:2, winX: 4, winY: 2, isBlank: false},

        {id: 12, display: 12, currX: 1, currY:1, winX: 1, winY: 1, isBlank: false},
        {id: 13, display: 13, currX: 2, currY:1, winX: 2, winY: 1, isBlank: false},
        {id: 14, display: 14, currX: 3, currY:1, winX: 3, winY: 1, isBlank: false},
        {id: 15, display: 15, currX: 4, currY:1, winX: 4, winY: 1, isBlank: false},
      ]
    }
    this.tileClick=this.tileClick.bind(this);
  }
  
  tileClick(tileobj){
    console.log("tile", tileobj.id, "clicked")
  }

  componentDidMount(){
    this.assignEmpty()
    // this.testFunc()
  }

  // testFunc(){
  //   // console.log("test func", this.state.tileData.length)
  //   var attempt = this.state.tileData.filter(findBlank => findBlank.isBlank === true)
  //   var finalBlank = attempt.id
  //   console.log("test func", attempt)
  // }

  assignEmpty(){
    for(let i=0; i < this.state.tileData.length; i++){
      if(this.state.tileData[i].isBlank === true){
        console.log("empty tile is",this.state.tileData[i].id)
      } 
    }
    // var getBlank = this.state.tileData[0].isBlank
    // console.log(this.state.tileData.length)
  }

  
  render() {
    return (
      <>
      <div>
      App
    </div>
    <Grid 
      tileData={this.state.tileData}
      tileClick={this.tileClick}
    />
  </>
  )
}
}

export default App;
