import React from 'react';


function LeftSide() {
    var leftPosition = {
        color: 'red',
        gridColumnStart: '1',
        gridColumnEnd: '3',
        border: '1px black solid',
  
      }

    return (
        <div style={leftPosition}>
            <p>Placeholder for left content</p>
        </div>
    )
}

export default LeftSide;