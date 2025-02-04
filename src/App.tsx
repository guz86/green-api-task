import { Header } from './components/Header/Header';
import { Chats } from './components/Chats/Chats';
import { Dialog } from './components/Dialog/Dialog';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Chats />
      <Dialog />
    </div>
  );
}

export default App;
