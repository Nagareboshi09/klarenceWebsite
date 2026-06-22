// src/services/contactService.ts

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  user_id: string | null;
  created_at: string;
  is_read: boolean;
}

export type ContactMessageInsert = Omit<ContactMessage, 'id' | 'created_at' | 'is_read'>;

// In-memory storage (messages will reset on page refresh)
let messages: ContactMessage[] = [];
let idCounter = 0;

// Helper to generate unique ID
const generateId = () => {
  idCounter++;
  return `msg_${Date.now()}_${idCounter}`;
};

export const contactService = {
  async getAllMessages(): Promise<{ data: ContactMessage[] | null; error: Error | null }> {
    try {
      console.log("=== FETCHING ALL MESSAGES ===");
      console.log("Messages count:", messages.length);
      
      // Sort by created_at descending
      const sortedMessages = [...messages].sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      
      return { data: sortedMessages, error: null };
    } catch (error) {
      console.error('❌ Error fetching messages:', error);
      return { data: null, error: error as Error };
    }
  },

  async insertMessage(message: ContactMessageInsert): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      console.log("=== INSERTING MESSAGE ===");
      console.log("Message data:", message);
      
      const newMessage: ContactMessage = {
        ...message,
        id: generateId(),
        created_at: new Date().toISOString(),
        is_read: false
      };
      
      messages.push(newMessage);
      console.log("✅ Message inserted successfully:", newMessage.id);
      console.log("Total messages:", messages.length);
      
      return { data: newMessage, error: null };
    } catch (error) {
      console.error('❌ Error inserting message:', error);
      return { data: null, error: error as Error };
    }
  },

  async markAsRead(id: string): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      console.log("=== MARKING MESSAGE AS READ ===");
      console.log("Message ID:", id);
      
      const messageIndex = messages.findIndex(msg => msg.id === id);
      if (messageIndex === -1) {
        throw new Error(`Message with ID ${id} not found`);
      }
      
      messages[messageIndex].is_read = true;
      console.log("✅ Message marked as read successfully");
      
      return { data: messages[messageIndex], error: null };
    } catch (error) {
      console.error('❌ Error marking message as read:', error);
      return { data: null, error: error as Error };
    }
  },

  async deleteMessage(id: string): Promise<{ error: Error | null }> {
    try {
      console.log("=== DELETING MESSAGE ===");
      console.log("Message ID:", id);
      
      const initialLength = messages.length;
      messages = messages.filter(msg => msg.id !== id);
      
      if (messages.length === initialLength) {
        throw new Error(`Message with ID ${id} not found`);
      }
      
      console.log("✅ Message deleted successfully");
      return { error: null };
    } catch (error) {
      console.error('❌ Error deleting message:', error);
      return { error: error as Error };
    }
  },
  
  // Optional: Clear all messages (for testing)
  async clearAllMessages(): Promise<void> {
    messages = [];
    idCounter = 0;
    console.log("All messages cleared");
  }
};

export default contactService;