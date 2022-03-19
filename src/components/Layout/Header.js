import { NavLink } from "react-router-dom";

import classes from './Header.module.css';

const Header = () => {
 return <header className={classes.header}>
     <h2>To Do List</h2>
     <nav>
         <ul className={'header ul'}>
             <li><NavLink activeClassName={classes.active} to="/resumen">Inicio</NavLink></li>
             <li><NavLink activeClassName={classes.active} to='/toDo'>Tareas por hacer</NavLink></li>
             <li><NavLink activeClassName={classes.active} to='/completed'>Tareas realizadas</NavLink></li>
         </ul>
     </nav>
 </header>
}
export default Header;