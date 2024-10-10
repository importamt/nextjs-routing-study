import {ReactNode} from "react";

const Layout = ({children, modal}: {
    children: ReactNode,
    modal: ReactNode
}) => {

    return <div className={'p-4 bg-amber-100 rounded'}>
        {children}
        {modal}
    </div>
};

export default Layout;