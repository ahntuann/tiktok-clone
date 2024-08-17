import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import { Header, Sidebar } from '~/components/Layout/components';

const cs = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cs('wrapper')}>
            <Header />
            <div className={cs('container')}>
                <Sidebar />

                <div className={cs('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
