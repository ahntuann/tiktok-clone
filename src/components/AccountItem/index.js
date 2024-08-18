import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import style from './AccountItem.module.scss';

const cs = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cs('wrapper')}>
            <img
                className={cs('avt')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a3e49623f8a3461eb16fc3ecbd31ec09.jpeg?lk3s=a5d48078&nonce=94261&refresh_token=04d1b476c5915ca4da3b5af9021011ae&x-expires=1724126400&x-signature=WTcxIh1j0TpLXP2ifqL6%2B5EJqTg%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoaa"
                loading="lazy"
            />
            <div className={cs('info')}>
                <h4 className={cs('name')}>
                    Nguyen Van A
                    <FontAwesomeIcon className={cs('icon')} icon={faCheckCircle} />
                </h4>
                <span className={cs('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
