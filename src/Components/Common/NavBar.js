import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const NavBar = () => {
  return ( 
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
          홈
        </Link>
        <Link underline="hover" color="inherit" href="/resume">
          이력서
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/projects"
        >
          프로젝트
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/about"
          aria-current="page"
        >
          기타
        </Link>
      </Breadcrumbs>
   );
}
 
export default NavBar;