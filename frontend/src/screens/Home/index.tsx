// import Interview from '../Interview';
// import Sidebar from '../../Components/Sidebar';
import Login from '../Login'
import style from './style.module.css';

export default function App () {

  return (
    <div className={style.home}>
        <div className={style.container}>
          {/* <Interview /> */}
          {/* <Sidebar /> */}
          <Login />
        </div>
    </div>
  );
};

