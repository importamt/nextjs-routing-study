import {ReactNode} from "react";

const Layout = ({children}: { children: ReactNode }) => {

    return <div className={'p-4 bg-blue-300 rounded'}>
        {children}
    </div>
};

export default Layout;