import { supabase } from "@/lib/supabase";
import { Message } from "@/types/Message";

export interface CreateMessageRequest {
  name: string;
  message: string;
}

export async function getMessages(): Promise<Message[]> {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}

export async function createMessage(name, message,): Promise<Message> {
  const { data, error } = await supabase
    .from("messages")
    .insert({
      name,
      message,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }
  return data;
}