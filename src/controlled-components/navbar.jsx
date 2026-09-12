
export function Navbar(props){
    return(
        <nav className={`d-flex my-2 border justify-content-between p-2 border-1 ${props.theme}`}>
            <div className="fw-bold fs-5">
                {props.brand}
            </div>
            <div>
                {
                    props.menu.map(item=><span className="mx-4" key={item}>{item}</span>)
                }
            </div>
            <div>
                <button className="bi bi-person-fill btn">Sign In</button>
                <button className="bi bi-heart btn"></button>
                <button className="bi bi-facebook btn"></button>
            </div>
        </nav>
    )
}