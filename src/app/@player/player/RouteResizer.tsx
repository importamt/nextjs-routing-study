'use client'

import {usePathname} from "next/navigation";

const RouteResizer = ({children}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname();

    if (pathname.includes('player')) {
        return <div
            className={'p-4 z-50 absolute left-0 top-0 w-screen h-screen bg-[#FF0000] flex justify-center items-center'}>
            {children}
        </div>
    } else {
        return <div
            className={'p-4 absolute right-0 bottom-0 w-32 h-24 bg-[#00000020] flex justify-center items-center'}>
            {children}
        </div>
    }
};

export default RouteResizer;