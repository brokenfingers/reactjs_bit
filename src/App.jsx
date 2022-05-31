import './App.css';
import { useEffect, useState } from 'react';
import ListItem from './Components/016/ListItem';
import rand from './Functions/rand';

function App() {
    const [nameState, setNameState] = useState('');
    const [nameColor, setColorState] = useState('#ffffff');
    const [list, setList] = useState([]);
    const [clickedId, setClickedId] = useState(null);
    const [editItem, setEditItem] = useState(null);
    const [selected, setSelected] = useState('');

    const handleChange = (e) => {
        setSelected(e.target.value);
    };

    const handleTextChange = (e) => {
        setNameState(e.target.value);
    };

    const handleColorChange = (e) => {
        setColorState(e.target.value);
    };

    useEffect(() => {
        if (editItem) {
            setNameState(editItem.nameState);
            setColorState(editItem.nameColor);
        }
    }, [editItem]);

    useEffect(() => {
        setList((i) => [...i.filter((d) => d.id !== clickedId)]);
    }, [clickedId]);

    const handleClick = () => {
        if (!nameState || !nameColor) return;

        if (editItem) {
            setList((i) => [
                ...i.map((d) =>
                    d.id === editItem.id
                        ? { nameState, nameColor, selected, id: editItem.id }
                        : d
                ),
            ]);
            setEditItem(null);
        } else {
            setList((i) => [
                ...i,
                { nameState, nameColor, selected, id: rand(10000, 99000) },
            ]);
        }

        setNameState('');
        setColorState('#ffffff');
    };
    const sortNames = () => {
        setList((i) => [
            ...list.sort((a, b) => a.nameState.localeCompare(b.nameState)),
        ]);
    };
    const sortColors = () => {
        setList((i) => [
            ...list.sort((a, b) => a.nameColor.localeCompare(b.nameColor)),
        ]);
    };

    const clearList = () => {
        setList([]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="card">
                    <p className="title">
                        {editItem ? 'Edit list item' : 'Add to list'}
                    </p>
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="name"
                        value={nameState}
                    />
                    <input
                        onChange={handleColorChange}
                        type="color"
                        value={nameColor}
                    />
                    <select value={selected} onChange={handleChange}>
                        <option value=""></option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                    <button onClick={handleClick}>
                        {editItem ? 'Edit' : 'Add'}
                    </button>
                    <button onClick={sortNames}>sort names</button>
                    <button onClick={sortColors}>sort colors</button>
                    <button onClick={clearList}>clear list</button>
                </div>
                <div className="card">
                    <p className="title">List</p>
                    <>
                        {list.length > 0
                            ? list.map((itm, i) => (
                                  <ListItem
                                      setEditItem={setEditItem}
                                      setClickedId={setClickedId}
                                      key={i}
                                      itm={itm}
                                      listNr={i + 1}
                                  ></ListItem>
                              ))
                            : null}
                    </>
                </div>
            </header>
        </div>
    );
}

export default App;
