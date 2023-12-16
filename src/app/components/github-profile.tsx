export async function GithubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch('https://api.github.com/users/viniciusferreira7')
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
