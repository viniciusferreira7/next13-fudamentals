'use client'

export function AddToCarButton() {
  function handleAddToCar() {
    const test = { 'Adicionado ao carrinho': 'test' }
    console.log(test['Adicionado ao carrinho'])
  }

  return <button onClick={handleAddToCar}>Adicionar ao carrinho</button>
}
