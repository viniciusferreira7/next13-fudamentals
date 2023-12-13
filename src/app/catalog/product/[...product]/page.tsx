import { AddToCarButton } from './addToCarButton'

interface ProductProps {
  params: {
    product: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  const [id, size, color] = params.product

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/viniciusferreira7')
  const user = await response.json()

  return (
    <div>
      <p>Product: {id}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
      <AddToCarButton />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
