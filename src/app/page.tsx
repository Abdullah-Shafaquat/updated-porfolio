import About from "./about/page";
import Hero from "./components/hero";
import Contact from "./contact/page";
import ProjectSection from "./project/page";

export default function Home(){
  return(
    <div>
      <h2><Hero /></h2>
      <h1><About /></h1>
      <h1>
        <ProjectSection/></h1>
        <h1><Contact/></h1>
    </div>
  )
}