import { useState } from "react";

import Item from "./Item";

export default function GroceryList({items, onDeleteItem, onToogleItem, onClearItems}) {
    const [sortBy, setSortBy] = useState('input')
  
    let sortedItem;
  
    switch (sortBy) {
      case 'name':
        sortedItem = items.slice().sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'checked':
        sortedItem = items.slice().sort((a, b) => b.checked - a.checked);
        break;
      default:
        sortedItem = items;
        break;
    }
  
    return (
      <>
      <div className="list">
        <ul>
          {sortedItem.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToogleItem={onToogleItem}/>
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
      </>
    )
  }