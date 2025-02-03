import { Header } from './components/Header/Header';
import styles from './App.module.scss';
import { Chats } from './components/Chats/Chats';
import { Dialog } from './components/Dialog/Dialog';

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
