import { Component } from "react"
import createConnection from "./chat"


class ChatRoom extends Component {
  state = {
    serverUrl : 'https://localhost:8080'
  }

  componentDidMount () {
      this.setUpConnections();
  }

  componentDidUpdate(prevState,prevProp) {
    if (
      this.props.roomId !== prevProp.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyconnections();
      this.setUpConnections();
    }
  }

  componentWillUnmount () {
    this.destroyconnections();
  }
  setUpConnections (){
    this.connection = createConnection(this.state.serverUrl,this.props.roomId);
    this.connection.connect();
  }

  destroyconnections () {
    this.connection.disconnect();
    this.connection = null;
  }
  render (){
      return (
        <div className="chat-room">
         <label>
         Server URL:{' '}
         <input 
           value={this.state.serverUrl}
           onChange={(e) => {
            this.setState({
                serverUrl:e.target.value
            })
           }}
         
         />
         </label>
         <h1>Welcome to the {this.props.roomId} room!</h1>
        </div>
      )
  }
}

export default ChatRoom