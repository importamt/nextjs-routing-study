const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <div>
            <h1>Dynamic routes</h1>
            <p>slug type: {typeof params.slug}</p>
            <p>slug value: {params.slug}</p>
        </div>
    );
}

export default Page;