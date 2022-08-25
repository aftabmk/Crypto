import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../components/image/image.png'
import { useState } from 'react';
import { useEffect } from 'react';
const Navbar = () => {
    const [active, setActive] = useState(true)
    const [screenSize, setScreenSize] = useState(null)
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        if (screenSize < 768) {
            setActive(false)
        } else {
            setActive(true)
        }
    }, [screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={()=> setActive(!active)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {active && (
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Crypto Currencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    );
}

export default Navbar;