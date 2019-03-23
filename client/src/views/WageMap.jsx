import React, { Component } from 'react';

import ChoroplethMap from './ChoroplethMap';

class App extends Component {
  state = {
    data: [
      ["MB", 75], ["SK", 43], ["AB", 50], ["BC", 88], ["NU", 21], ["NT", 43],
      ["YT", 21], ["ON", 19], ["QC", 60], ["NB", 4], ["NS", 44], ["NF", 38],
      ["PE", 67]],
  }
  render() {
    return (
      <div className='Wage-Map' style={{
        height:"100vh",
        width: "100vw"
      }}>
        <ChoroplethMap data={this.state.data}/>
      </div>
    );
  }
}

export default App;