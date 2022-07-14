import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import SideBar from './Sidebar';
import Note from './pages/Note';

const cx = classNames.bind(styles);

function App() {
    return (
        <div className={cx('wrapper-content')}>
            <SideBar />
            <div className={cx('container')}>
                <Note />
            </div>
        </div>
    );
}

export default App;
