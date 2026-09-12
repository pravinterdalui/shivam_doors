

export function DataGrid(props){

    if(props.layout==="grid"){

        return(
            <div className="table-responsive">
                <table className={`table caption-top table-hover`}>
                    <caption>{props.caption}</caption>
                    <thead>
                        {
                            Object.keys(props.date[0].map(filed=>
                                <th key={filed}>
                                    {filed}
                                    <span className="dropdown">
                                        <button data-bs-toggle="dropdown" data-bs-target="#menu" className="dropdown-toggle bi bi-three-bi-three-dots-vertical btn"></button>
                                        <ul className="dropdown-menu" id="menu">
                                            <li className="dropdown-item">
                                            <span className="bi bi-funnel"></span>Filter
                                            </li>

                                             <li className="dropdown-item">
                                            <span className="bi bi-sort-alpha-down"></span>Sort Ascending
                                            </li>

                                             <li className="dropdown-item">
                                            <span className="bi bi-sort-alpha-up"></span>Sort Descending
                                            </li>
                                        </ul>
                                    </span>
                                </th>
                            ))
                        }
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {
                            props.data.map((item,index)=>
                            <tr key={index}>
                                {
                                    Object.keys(item).map((filed,i)=>
                                    <td key={i}>{item[filed]}</td>)
                                }
                                <td>
                                    <button className="btn btn-danger bi bi-trash"></button>
                                    <button className="btn btn-warning bi bi-pen mx-2"></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    else{
        return(
            <div>
                <h4>{props.caption}</h4>
                <div className="d-flex flex-row">
                    {
                        props.data.map((item,index)=>
                        <div key={index} className="card p-2 m-2" style={{width:'200px'}}>
                            <div className="card-header">
                            <h3>{Object.keys(item)[0]}</h3>
                            </div>
                            <div className="card-body">
                                {item[Object.keys(item)[0]]}
                            </div>

                            <div className="card-footer">
                                <button className="btn btn-danger bi bi-trash"></button>
                                <button className="btn btn-warning bi bi-pen mx-2"></button>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        )
    }
}