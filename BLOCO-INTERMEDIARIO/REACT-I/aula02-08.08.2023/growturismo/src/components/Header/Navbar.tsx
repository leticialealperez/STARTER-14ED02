import { Link } from 'react-router-dom';
import navigation from '../../config/navigation';
import NavigationStyled from './NavigationStyled';

function Navbar() {
  return (
    <NavigationStyled>
      <ul>
        {navigation.map((item) => (
          <li>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
}

export default Navbar;

// [1, 2, 3].map((item) => item * 2)  [2, 4, 6]
// ['joao', 'maria, 'pedro'].map((item) => item.toUpperCase()) ['JOAO', 'MARIA', 'PEDRO']

// [1, 2, 3].map((item) => <h1>item</h1>)

// [<h1>1</h1>, <h1>2</h1>, <h1>3</h1>]
