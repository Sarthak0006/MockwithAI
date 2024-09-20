import Interview from '../Interview';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import style from './style.module.css';

export default function App () {

  return (
    <div>
        <Header />
        <div className={style.container}>
          <Interview />
          <Sidebar />
        </div>
    </div>
  );
};

