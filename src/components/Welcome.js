
import React, {Component} from 'react'

class Welcome extends Component{
    render() {
      return (
          <div>
              <h1>class component props are accessed by {this.props.keyword}</h1>
              <button>simple button</button>
          </div>
      
      )
    }
}

export default Welcome