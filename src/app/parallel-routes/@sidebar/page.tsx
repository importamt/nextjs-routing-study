import Link from "next/link";

const Page = () => {
    return (
        <div>
        <h1>Sidebar Page</h1>

            <h2>menu</h2>
            <main>
                <Link href="/parallel-routes">
                    <p>HOME</p>
                </Link>

                <Link href="/parallel-routes/first">
                    <p>First</p>
                </Link>

                <Link href="/parallel-routes/second">
                    <p>Second</p>
                </Link>

                <Link href="/modal">
                    <p>Modal</p>
                </Link>

                <Link href="/parallel-routes/third">
                    <p>Third</p>
                </Link>
            </main>
        </div>
    );
}

export default Page;