// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import RouteResizer from "@/app/@player/player/RouteResizer";

const Layout = ({children}: {
    children: React.ReactNode
}) => {
    return <RouteResizer>

        <h1>Full player</h1>
        {children}
    </RouteResizer>
};

export default Layout;