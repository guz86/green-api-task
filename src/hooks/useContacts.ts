import { useState } from 'react';
import { contactsApi } from '../services/contactsApi';

const COUNT_USER = 100;

export interface Contact {
  id: string;
  name: string;
  contactName: string;
  type: 'user' | 'group';
}

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await contactsApi.getContacts();
      const data = response as Contact[];

      // const sortedContacts = data.sort((a, b) => a.name.localeCompare(b.name));

      // setContacts(sortedContacts);
      const filteredContacts = data
        .filter((contact) => contact.contactName !== '')
        .slice(0, COUNT_USER);

      setContacts(filteredContacts);

      // setContacts(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const userContacts = contacts.filter((c) => c.type === 'user');
  // const groupContacts = contacts.filter((c) => c.type === "group");

  // return { contacts, userContacts, groupContacts, fetchContacts, loading, error };

  return { contacts, userContacts, fetchContacts, loading, error };
};
