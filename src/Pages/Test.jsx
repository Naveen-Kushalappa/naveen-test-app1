import useGetQuery from "../hooks/useGetQuery";

const Test = () => {
    const { loading, data } = useGetQuery('https://jsonplaceholder.org/posts');

    return (
        <>
            <div className="h-full">
                <h2>Here is the test data:</h2>
                <ul>{ !loading ? data.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                }) :  <h2>No data</h2> }</ul>
            </div>
        </>)

}


export default Test;