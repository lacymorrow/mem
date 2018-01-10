import Link from 'next/link'


const sx = {
	link: {
	  marginRight: 15,
	  color: 'white'
	}
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={sx.link}>Home</a>
    </Link>
    <Link href="/about">
      <a style={sx.link}>About</a>
    </Link>
  </div>
)

export default Header
