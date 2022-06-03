function Tree({ tree, index }) {
    return (
        <div>
            <b>{index}</b>
            <span>{tree.title}</span>
            <i>{tree.height}</i>
            <small>
                {['spygliuotis', 'lapuotis', 'krumas', 'gėlė'][tree.type - 1]}
            </small>
            <button>edit</button>
            <button>delete</button>
        </div>
    );
}

export default Tree;
