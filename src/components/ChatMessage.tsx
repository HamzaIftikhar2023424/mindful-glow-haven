
import { User, Clock } from "lucide-react";

type ChatMessageProps = {
  message: string;
  username: string;
  timestamp: string;
  isCurrentUser: boolean;
};

const ChatMessage = ({ message, username, timestamp, isCurrentUser }: ChatMessageProps) => {
  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[80%] ${isCurrentUser ? 'order-1' : 'order-2'}`}>
        <div 
          className={`px-4 py-3 rounded-2xl ${
            isCurrentUser 
              ? 'bg-mindful-sage text-white rounded-br-none' 
              : 'bg-background border border-mindful-sage/20 rounded-bl-none'
          }`}
        >
          <p className="text-sm">{message}</p>
        </div>
        <div className={`flex items-center mt-1 text-xs text-muted-foreground ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
          <div className="flex items-center">
            {!isCurrentUser && (
              <>
                <User size={12} className="mr-1" />
                <span className="mr-2">{username}</span>
              </>
            )}
            <Clock size={12} className="mr-1" />
            <span>{timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
