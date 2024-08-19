import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cs = classNames.bind(style);
const defaultF = () => {};

function Menu({ children, items = [], onChange = defaultF }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    function renderItem() {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory([...history, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    }

    function backMenu() {
        setHistory(history.slice(0, history.length - 1));
    }

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cs('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cs('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onBack={backMenu} />}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory(history.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
