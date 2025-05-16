import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Commitment from './components/Commitment'

import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style

function App() {
  return (
    <div className='min-h-screen pb-[10rem]'>
      <Navbar />
      <Hero />
      <Commitment id="commitment"/>
    </div>
  )
}

export default App