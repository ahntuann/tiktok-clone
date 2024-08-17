import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cs = classNames.bind(style);

function Header() {
    return (
        <header className={cs('wrapper')}>
            <div className={cs('inner')}></div>
        </header>
    );
}

export default Header;
