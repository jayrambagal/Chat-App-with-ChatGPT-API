import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import Header from "./Header"
import StandardMsgForm from "./StandardMsgForm"
const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "Jay",
    "jay@1234"
  )
  return (
    <div style={{flexBasis:"50%"}}>
      <MultiChatSocket/>

    <MultiChatWindow {...chatProps}
    style={{height: "100vh" }}
    renderChatHeader={(chat) => <Header chat={chat}/>}
    
    renderMessageForm={(props)=>
      {
        return(
          <StandardMsgForm props={props} activeChat={chatProps.chat} />
        )
        }}
    />
    
    </div>
  )
}

export default Chat
