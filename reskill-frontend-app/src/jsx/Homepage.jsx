import { useState } from 'react'
import Navigator from './Navigator.jsx'
import Footer from './Footer.jsx'
import MainArticle from './MainArticle.jsx'

function Homepage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <navigator>
        <Navigator />
      </navigator>
      <article>
        <MainArticle />
      </article>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Homepage
