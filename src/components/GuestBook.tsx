import { useEffect, useState } from "react";
import MessageCard from "./MessageCard";
import GuestMessages from "./GuestMessages";
import { Message } from "@/types/Message";
import { getMessages } from "@/services/message.service";

export default function GuestBook() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleMessageCreated = (
    novaMensagem: Message
    ) => {
        setMessages((previous) => [
            novaMensagem,
            ...previous,
        ]);
    };

  async function loadMessages() {
    try {
      const data = await getMessages();
      setMessages(data);
    } catch (error) {
      console.error("Erro ao carregar mensagens:", error);
    }
  }

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <>
      <MessageCard onMessageCreated={handleMessageCreated} />
      <GuestMessages messages={messages} />
    </>
  );
}