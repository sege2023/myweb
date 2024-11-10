import { Route, Routes } from "react-router-dom"
import Projects from "./assets/components/projects"
import About from "./assets/components/about"
import App from "./App"

const RouterComponent = () =>{
    return(
        <Routes>
            <Route path="/" element = {<App/>}/>
            <Route path="/projects" element = {<Projects/>}/>
            <Route path="/about" element = {<About/>}/>
        </Routes>
    )
}
export default RouterComponent