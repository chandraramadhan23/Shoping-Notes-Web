export default function Item({item, onDeleteItem, onToogleItem}) {
    return (
      <li key={item.id} style={item.checked ? {textDecoration : 'line-through'} : {}}>
        <input type="checkbox" checked={item.checked} onChange={() => onToogleItem(item.id)}/>
        <span>{item.quantity} {item.name}</span>
        <button onClick={() => onDeleteItem(item.id)} >&times;</button>
      </li>
    )
  }