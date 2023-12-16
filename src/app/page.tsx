import { Suspense } from 'react'
import { GithubProfile } from './components/github-profile'
import { LongWaitComponent } from './components/long-await-component'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <div>
      <h1>Home!</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        doloribus voluptatibus! Consectetur ullam laboriosam animi aperiam
        impedit culpa id architecto, aliquam rem et voluptatibus tenetur
        similique nisi deleniti sit saepe.
      </p>
      <Suspense fallback={<p>Longo carregamento do componente...</p>}>
        <LongWaitComponent />
      </Suspense>
      <Suspense fallback={<p>Carregando perfil do github...</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
