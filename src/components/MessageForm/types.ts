export interface MessageFormProps {
  idInstance: string;
  apiTokenInstance: string;
  onContactChange: (contact: string | null) => void;
  onSendMessage: (message: string) => void;
}
