import {ReactNode} from "react";

const Layout = ({children, sidebar}: {
    children: ReactNode,
    sidebar: ReactNode
}) => {

    return <div className={'p-4 bg-amber-100 rounded'}>
        {children}
        {sidebar}
    </div>
};

export default Layout;