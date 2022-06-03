function Tree({ tree, index, setDeleteTreeData, setEditTree }) {
    return (
        <div>
            <b>{index}</b>
            <span>{tree.title}</span>
            <i>{tree.height}</i>
            <small>
                {['spygliuotis', 'lapuotis', 'krumas', 'gėlė'][tree.type - 1]}
            </small>
            <button onClick={()=>setEditTree(tree)}>edit</button>
            <button onClick={()=>setDeleteTreeData(tree)}>delete</button>
        </div>
    );
}

export default Tree;
