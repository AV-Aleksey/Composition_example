import React, { FC } from "react";
import css from './styles.module.css'

type LayoutProps = {
    children: ReturnType<FC>;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={css.layout}>
            {children}
        </div>
    )
}