
import Arrival from './components/Arrival/arrival'
import Blog from './components/Blog/blog'
import Featuredproducts from './components/FeaturedProducts/featuredproducts'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Offer from './components/Offers/offer'
import Subscribe from './components/Subscribe/subscribe'

import './globals.css'
export default function Home() {
  return (
<>
<Header/>
<Arrival/>
<Offer/>
<Featuredproducts/>
<Blog/>
<Subscribe/>
<Footer/>

</>
  )
}
