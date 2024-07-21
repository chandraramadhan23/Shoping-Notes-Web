export default function Footer( {items} ) {
    if (items.length === 0) return <footer className="stats">Tidak ada daftar belanjaan!</footer>
  
    const totalItems = items.length
    const totalChecked = items.filter((item) => item.checked === true).length
    const precentage = Math.round((totalChecked/totalItems) * 100)
  
  
    return <footer className="stats">Ada {totalItems} barang di daftar belanjaan, {totalChecked} barang sudah dibeli ({precentage}%)</footer>
  }