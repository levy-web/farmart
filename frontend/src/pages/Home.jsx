import { Navbar, Main, Animal, Footer } from "../components";
import Next from "../components/Pagination";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Animal/>
      <Next/>
      <Footer />
    </>
  )
}

export default Home