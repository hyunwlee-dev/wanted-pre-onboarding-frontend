import { useNavigate } from 'react-router-dom';
import classes from './nav.module.css';

const Nav = () => {
  const list = [
    { id: 'home', to: '/', text: '홈'},
    { id: 'signin', to: '/signin', text: '로그인'},
    { id: 'signup', to: '/signup', text: '회원가입'},
    { id: 'todo', to: '/todo', text: '할일 목록'},
  ]
  const move = useNavigate();
  return (
    <ul className={classes.ul}>
      {list.map(item => (
        <li className={classes.li} key={item.id} role='link' onClick={() => move(`${item.to}`)}>
          {item.text}
        </li>
      ))}
    </ul>
  )
}

export { Nav };
