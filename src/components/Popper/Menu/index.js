import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';

const cs = classNames.bind(style);

function Menu({ children, items = [] }) {
    function renderItem() {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    }

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cs('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cs('menu-popper')}>{renderItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
