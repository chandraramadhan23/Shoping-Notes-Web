import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import GroceryList from "./components/GroceryList"
import Footer from "./components/Footer"

const groceryItem = [
  {
    id : 1,
    name : 'Kopi Bubuk',
    quantity : 5,
    checked : true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
]


// Main Component - Component App
export default function App() {
  const [items, setItems] = useState(groceryItem)

  function handleAddItem(item) {
    setItems([...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items.filter(item => item.id != id))
  }

  function handleToogleItem(id) {
    setItems(items.map(item => item.id === id ? {...item, checked:!item.checked} : item))
  }

  function handleClearItems() {
    setItems([])
  }

  return (
  <div className="app">
    <Header />
    <Form onAddItem={handleAddItem}/>
    <GroceryList items={items} onDeleteItem={handleDeleteItem} onToogleItem={handleToogleItem} onClearItems={handleClearItems}/>
    <Footer items={items} />
  </div>
  )
}
