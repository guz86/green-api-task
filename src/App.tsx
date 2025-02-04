import { Header } from './components/Header/Header';
import { Chats } from './components/Chats/Chats';
import { Dialog } from './components/Dialog/Dialog';
import styles from './App.module.scss';
import { ContactProvider } from './context/ContactContext';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <ContactProvider>
        <Chats />
        <Dialog />
      </ContactProvider>
    </div>
  );
}

export default App;
