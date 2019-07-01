import React from 'react';


function RightSide() {
    var rightPosition = {
        gridColumnStart: '3',
        gridColumnEnd: '4',
        border: '1px black solid'
    }

    return (

        <div style={rightPosition}>
            <p>Placeholder for right content</p>
        </div>
    )
}

export default RightSide;