import { useRouter } from 'next/router'

export function ButtonBack(): React.ReactNode {
  const router = useRouter()

  return (
    <button onClick={() => router.back()}>
      <i
        style={{ padding: '0.2rem', fontSize: '1rem' }}
        className="material-symbols-outlined">
        arrow_back
      </i>
    </button>
  )
}
