

export function FakestoreSearch(){
    return(
        <div>
            <h3>Search Products</h3>
            <form method="get" action="/results">
                <input type="text" name="category" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
