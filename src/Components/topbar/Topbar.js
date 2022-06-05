import { useNavigate } from 'react-router-dom';
import './topbar.css';
import { Person, Search, Chat, Notifications } from '@mui/icons-material';
import Topbarbutton from './Topbarbutton';

export default function Topbar() {
  const navigate = useNavigate();

  const signout = () => {
    if (typeof window !== undefined) {
      localStorage.removeItem('jwt');
      navigate('/');
    }
  };

  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        <span className='logo'>ConnectBook</span>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input
            placeholder='Search for friend or post'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Chat />
            <span className='topbarIconBadge'>2</span>
          </div>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>4</span>
          </div>
        </div>
        <Topbarbutton />
      </div>
    </div>
  );
}
