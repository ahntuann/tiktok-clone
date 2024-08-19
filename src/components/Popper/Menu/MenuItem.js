import classNames from 'classnames/bind';

import style from './Menu.module.scss';
import Button from '~/components/Button';

const cs = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const classes = cs('menu-item', {
        separate: data.separate,
    });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
