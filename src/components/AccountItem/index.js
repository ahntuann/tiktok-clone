import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import style from './AccountItem.module.scss';

const cs = classNames.bind(style);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cs('wrapper')}>
            <img className={cs('avt')} src={data.avatar} alt={data.avatar} loading="lazy" />
            <div className={cs('info')}>
                <h4 className={cs('name')}>
                    {data['full_name']}
                    {data.tick && <FontAwesomeIcon className={cs('icon')} icon={faCheckCircle} />}
                </h4>
                <span className={cs('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
