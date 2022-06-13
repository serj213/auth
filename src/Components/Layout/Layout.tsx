import React from "react";

import styles from './layout.module.scss';

interface layoutProp {
    children: React.ReactNode
}

const Layout = ({children}:layoutProp) => {
    return <div className={styles.layout}>{children}</div>
}

export default Layout