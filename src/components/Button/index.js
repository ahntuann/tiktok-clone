import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';

const cs = classNames.bind(style);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    className,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const _props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        delete _props.onClick;
    }

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    const classes = cs('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
    });

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cs('icon')}>{leftIcon}</span>}
            <span className={cs('title')}>{children}</span>
            {rightIcon && <span className={cs('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
