import Navbar from "./Navbar"

export default function Header({title, present}) {
  return (
    <header>
        <Navbar />
        <h1>{title}</h1>
        <p>{present}</p>
    </header>
  )
}
