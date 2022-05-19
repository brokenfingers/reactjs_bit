function Table({users}) {
    return(
        <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((itm, i)=> <tr key={i}><td>{itm.name}</td><td>{itm.address.street+itm.address.suite}</td></tr>)
                    }
                </tbody>
                
                
                
        </table>
    )
}

export default Table;