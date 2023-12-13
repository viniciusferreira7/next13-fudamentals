export default async function Catalog() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/viniciusferreira7')
  const user = await response.json()

  return (
    <div>
      <h1>Catalog</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
