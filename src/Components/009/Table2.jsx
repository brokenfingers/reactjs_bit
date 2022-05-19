function Table2({users}) {
    return(
        <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Face</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((itm, i)=> 
                    <tr key={i}>
                        <td>{itm.firstName+' '+itm.lastName}</td>
                        <td><img src={itm.image.slice(0, itm.image.indexOf('?'))}/>
                        </td>
                    </tr>)
                    }
                </tbody>
                
                
                
        </table>
    )
}

export default Table2;