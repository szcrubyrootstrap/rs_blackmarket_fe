import { useState, useEffect } from 'react'
import IMAGES from 'images/images'
import Input from 'templates/Form/input'
import Select from 'templates/Form/select'
import Button from 'templates/Dashboard/button'
import { urlPath } from 'src/setup'
import { Link } from 'react-router-dom';

export default function NavBar () {
  const [search, setSearch] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)
  const [showText, setShowText] = useState(false)

  const changeSearchHandler = (e) => {
    setSearch(e.target.value)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1270)
    };

    const setInitialTextVisibility = () => {
      setShowText(window.innerWidth > 1270)
    };

    window.addEventListener('resize', handleResize);
    setInitialTextVisibility();
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showText]);

  useEffect(() => {
    setShowText(!isMobileView);
  }, [isMobileView]);

  return(
    <>
      <div className="navigator">
        <Link to={urlPath.dashboard}>
          <img src={IMAGES.unionWhite} alt="Black market logo" />
        </Link>
        <Input label=''
          type='text'
          value={search}
          name='search'
          className='search'
          placeholder='Search for products'
          onChange={changeSearchHandler}
          required={false}
          iconClass='search'
          iconTitle='Search'
        />
        <Select options={['Account', 'Other']} id='nav'/>
        <Button showText={!isMobileView} />
        <div className="menu-icon">
          <img src={IMAGES.menuIcon} onClick={toggleMenu} className='menu-img' alt='menu' />
        </div>
        { isMenuOpen && (
          <div className="menu-container">
            <div className="menu">
              <ul>
                <li>
                  <Link to={urlPath.option1}>Option 1</Link>
                </li>
                <li>
                  <Link to={urlPath.option2}>Option 2</Link>
                </li>
                <li>
                  <Link to={urlPath.option3}>Option 3</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
