'use client'
interface ProductProps {
  params: {
    product: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [id, size, color] = params.product

  function handleAddToCar() {
    const test = { 'Adicionado ao carrinho': 'test' }
    console.log(test['Adicionado ao carrinho'])
  }

  return (
    <div>
      <p>Product: {id}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
      <button onClick={handleAddToCar}>Adicionar ao carrinho</button>
    </div>
  )
}
