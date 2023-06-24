import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from './constants';

const Header = () => {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
    <Link 
        className="navbar-brand" 
        to="/"
    >
        API Phones
    </Link>

    <div className="navbar-collapse">
        <div className="navbar-nav">

            <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/create"
            >
                Crear
            </NavLink>

            <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/"
            >
                Celulares
            </NavLink>

                      {authToken ? (
                          <div
                              className="ml1 pointer black"
                              onClick={() => {
                                  localStorage.removeItem(AUTH_TOKEN);
                                  navigate(`/`);
                              }}
                          >
                              Logout
                          </div>
                      ) : (
                          <Link
                              to="/login"
                              className="ml1 no-underline black"
                          >
                              Login
                          </Link>
                      )}
           
        </div>
    </div>

    <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/openai"
            >
                OpenAI
            </NavLink>

    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
           
            <span className="nav-item nav-link text-primary">
                Aldo Torres Ramírez
            </span>
        </ul>
    </div>
</nav>
    
    






    
  );
};

export default Header;
