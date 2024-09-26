import {ReactNode} from "react";

const Layout = ({children}: { children: ReactNode }) => {

    return <div className={'p-4 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-lg absolute left-0 top-0 flex justify-center items-center'}>
        {children}
    </div>
};

export default Layout;