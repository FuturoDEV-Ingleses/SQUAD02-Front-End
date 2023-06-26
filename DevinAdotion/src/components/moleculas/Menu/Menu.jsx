import { useLocation, useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.png';
import dashboard from '../../../assets/dashboard.png';
import estoque from '../../../assets/estoque.png'
import armazem from '../../../assets/armazem.png';
import sair from '../../../assets/sair.png'

import './Menu.css';

export default function Menu(){
    const navigate = useNavigate()
    const location = useLocation();

    const isSelected = (pathname) => {
        return location.pathname === pathname ? "selected" : "";
      };

      const handleClick = (pathname) => {
        navigate(pathname);
      };

      const handleSairClick = () => {
        navigate('/login');
      };

    return(
      <nav className='Menu'>
      <img src={logo} alt="logo" onClick={() => navigate("/dashboard")}/>
      <button className={isSelected("/dashboard")} onClick={() => handleClick("/dashboard")}>
          <img src={dashboard} alt="dashboard" width="50" height="50" viewBox="0 0 24 24" />
              <span>Dashboard</span>
      </button>
      <button className={isSelected("/estoque")} onClick={() => handleClick("/estoque")}>
          <img src={estoque} alt="estoque" width="50" height="50" viewBox="0 0 24 24"/>
              <span>Estoque</span>
      </button>
      <button className={isSelected("/armazem")} onClick={() => handleClick("/armazem")}>       
          <img src={armazem} alt="cadastro armazenammento" width="50" height="50" viewBox="0 0 24 24" />
              <span>Armazém</span>
      </button>

      <div className="navbar-link"  onClick={() => handleSairClick("/login")} >
  <img src={sair} alt="Sair" className="sair-icon" />
</div>
  </nav>
);
}