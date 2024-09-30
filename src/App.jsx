import { useState } from 'react'
import "./App.css"
import ChatRoom from './comps/ChatRoom';



function App() {
  const [roomId,setRoomId] = useState('general');
  const [show,setShow] = useState(false);

  return (
     <div className='main-room'>
     <label>
     Choose the chat room:{' '}
     <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
       <option value="general">general</option>
       <option value="travel">travel</option>
       <option value="music">music</option>
        <option value="gaming">gaming</option>
     </select>
     </label>
     <button className='app-btn' onClick={() => setShow(!show)}>
      {show?'Close chat':'Open chat'}
     </button>
     {show && <hr /> }
     { show && <ChatRoom roomId = {roomId} />}
     </div>
  )
}

export default App
