import './Navbar.css'

const NavLink = ({href, text}) => {
    return (
        <a className='link' href={href}>
            {text}
        </a>
    );
};

export default NavLink;
