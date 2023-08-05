import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../contexts';
import classes from './nav.module.css';
import { Container } from '.././Container';

const Nav = () => {
  const { navList } = useGlobalState();
  const move = useNavigate();
  return (
    <Container>
      <ul className={classes.ul}>
        {navList.map(item => (
          <li className={classes.li} key={item.id} role='link' onClick={() => move(`${item.to}`)}>
            {item.text}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export { Nav };
