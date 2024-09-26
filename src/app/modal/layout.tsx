import {ReactNode} from "react";

const Layout = ({children}: { children: ReactNode }) => {

    return <div className={'p-4 w-screen h-screen bg-[#00000020] absolute left-0 top-0 flex justify-center items-center'}>
        {children}
    </div>
};

export default Layout;