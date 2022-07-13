import React from "react";
import { ActiveChatHeader, Messages, Input } from ".";
import "./activeChat.css";
import { useQuery, useSubscription } from "@apollo/client";
import { QUERY_MESSAGES, SUBSCRIBE_MESSAGES } from "../../../utils/queries";

const ActiveChat = ({ currentConvo, me }: any) => {
  const { subscribeToMore, data } = useQuery(QUERY_MESSAGES, {
    variables: {
      convoId: currentConvo,
    },
  });

  const {
    loading,
    data: data2,
    error,
  } = useSubscription(SUBSCRIBE_MESSAGES, {
    variables: {
      convoId: currentConvo,
    },
  });
  // console.log(data && data);

  console.log(loading || data2 || error);

  return (
    <section className="chat-wrapper">
      <ActiveChatHeader currentConvo={currentConvo} />
      <div className="messages-container">
        <Messages
          messages={data.messages}
          me={me}
          subscribeToMessages={() => {
            subscribeToMore({
              document: SUBSCRIBE_MESSAGES,
              variables: { convoId: currentConvo },
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newMessage = subscriptionData.data.message;
                console.log("hit");
                return Object.assign({}, prev, {
                  messages: [newMessage, ...prev.messages],
                });
              },
            });
          }}
        />
        <Input currentConvo={currentConvo} />
      </div>
    </section>
  );
};

export default ActiveChat;
