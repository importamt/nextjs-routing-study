import {cookies, headers} from "next/headers";
import {ReactNode} from "react";

const Layout = ({children}: { children: ReactNode }) => {
    const nextHeaders = headers();
    const nextCookies = cookies();
    const a = nextHeaders.get('x-a-value');
    const hello = nextCookies.get('hello')?.value;

    return <div>
        <h2>
            x-a-value Header: {a}
        </h2>

        <h2>
            Cookie hello: {hello}
        </h2>

        {children}
    </div>
};

export default Layout;