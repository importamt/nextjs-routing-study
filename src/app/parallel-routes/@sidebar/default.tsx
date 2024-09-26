import Link from "next/link";

const Default = () => {
    return (
        <div>
        <h2>Default</h2>
            <Link href={"/parallel-routes"}>
                Home
            </Link>
        </div>
    );
}

export default Default;