function Posts({posts}) {

    return(
        <table>
                <thead>
                    <tr>
                        <th>Title</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                    posts.filter(i => [3, 4, 7].indexOf(i.userId) !== -1)
                    .sort((a, b) => b.title.length - a.title.length)
                    .map((itm, i)=> 
                    <tr key={i}>
                        <td style={{textDecoration: i%2===0 ? 'underline' : 'none'}}><span style={{color: 'red'}}>{itm.userId}   </span>{itm.title}</td>
                    </tr>)
                    }
                </tbody>
                
                
                
        </table>
    )
}

export default Posts;