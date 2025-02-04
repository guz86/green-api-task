import { createContext, useContext, useState, ReactNode } from 'react';

interface ContactContextType {
  selectedContactId: string | null;
  selectedContactName: string | null;
  setSelectedContactId: (id: string | null) => void;
  setSelectedContactName: (id: string | null) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const useContactContext = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContactContext must be used within a ContactProvider');
  }
  return context;
};

interface ContactProviderProps {
  children: ReactNode;
}

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [selectedContactId, setSelectedContactId] = useState<string | null>(
    null
  );
  const [selectedContactName, setSelectedContactName] = useState<string | null>(
    null
  );

  return (
    <ContactContext.Provider
      value={{
        selectedContactId,
        selectedContactName,
        setSelectedContactId,
        setSelectedContactName,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
