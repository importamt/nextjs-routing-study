const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <div>
            <h1>Optional Catch all routes</h1>
            <p>slug type: {typeof params.slug}</p>
            <p>slug value: {JSON.stringify(params.slug)}</p>
        </div>
    );
}

export default Page;