'use client'

import { ReactNode } from 'react'
import { Typography } from './typography'

export function AddToCarButton({ children }: { children: ReactNode }) {
  function handleAddToCar() {
    const test = { 'Adicionado ao carrinho': 'test' }
    console.log(test['Adicionado ao carrinho'])
  }

  return (
    <div>
      <button className="p-4 bg-indigo-800" onClick={handleAddToCar}>
        Adicionar ao carrinho
      </button>
      {children}
    </div>
  )
}
