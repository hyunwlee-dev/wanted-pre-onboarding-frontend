import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../contexts';
import classes from './nav.module.css';

const Nav = () => {
  const { navList } = useGlobalState();
  const move = useNavigate();
  return (
    <ul className={classes.ul}>
      {navList.map(item => (
        <li className={classes.li} key={item.id} role='link' onClick={() => move(`${item.to}`)}>
          {item.text}
        </li>
      ))}
    </ul>
  )
}

export { Nav };
