import React from 'react'

                        //(props)
export default function Grid(props) {
    //going to have to be prop passed
    // passing prop through to determine grid
  let grid = []
  let subArr = []
// console.log(props.tileData)
  for (let j = 0; j < props.tileData.length; j++) {
    let col = <button 
                style={{height: "150px"}}
                onClick={() => {props.tileClick(props.tileData[j])}} 
                className='col border border-primary' 
                key={props.tileData[j].id}
                >
                {/* displaying index on loop, need to change to a value */}
                    {props.tileData[j].display}
                </button>
        subArr.push(col)
    // for every 4th, makes a new row
    if ((j + 1) % 4 === 0) {
    //   console.log("in if")
      let row = <div 
                  style={{height: "150px"}}
                  className='row'
                >
                    {subArr}
                </div>
        grid.push(row)
        subArr = []
    }
  }
  // console.log(props.tileData)
  return (
    <div className='container'>
      {grid}
    </div>
  )
}




