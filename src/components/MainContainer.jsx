import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
// import Grid from 'react-css-grid'

function MainContainer() {
    var myMainContainerStyles = {
        display: 'grid',
      }

    return (
      <div style={myMainContainerStyles}>
        <LeftSide />
        <RightSide />
      </div>
    )
}

export default MainContainer;