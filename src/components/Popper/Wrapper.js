import classNames from 'classnames/bind';
import style from './Popper.module.scss';

const cs = classNames.bind(style);

function Wrapper({ children, className }) {
    return <div className={cs('wrapper', className)}>{children}</div>;
}

export default Wrapper;
