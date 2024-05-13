import Link from 'next/link'

export default function Header(): React.ReactNode {
  return (
    <header className="header">
      <h1 className="title">Welcome to the WorldAtlas </h1>
      <Link href="/"> {`Home >`}</Link>
    </header>
  )
}
