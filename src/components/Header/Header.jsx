import logo from '../../images/logo-mesto.svg'

export default function Header() {
  return(
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Место Россия"
      />
    </header>
  )
}