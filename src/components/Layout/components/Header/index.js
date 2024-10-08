import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faKeyboard,
    faCloudUpload,
    faUser,
    faCoins,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import style from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cs = classNames.bind(style);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    type: 'language',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                    type: 'language',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View Profile',
            to: '@lthao',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cs('wrapper')}>
            <div className={cs('inner')}>
                <div className={cs('logo')}>
                    <img src={images.logo}></img>
                </div>

                <Search />

                <div className={cs('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                <button className={cs('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    {currentUser ? (
                        <Menu items={userMenu} onChange={handleMenuChange}>
                            <Image
                                className={cs('user-avt')}
                                alt="Nguyen Van A"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a3e49623f8a3461eb16fc3ecbd31ec09.jpeg?lk3s=a5d48078&nonce=81525&refresh_token=6e3464051b89364be2bcb0eda9fa7746&x-expires=1724169600&x-signature=68d4YSUNsPm7x4xD%2Bo8duxolr3E%3D&shp=a5d48078&shcp=81f88b70"
                            ></Image>
                        </Menu>
                    ) : (
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <div className={cs('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
