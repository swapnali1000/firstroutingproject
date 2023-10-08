import Navbar from "./../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";
import "./Home.css";

export default function Home()
{
    return(
        <div className="home-container">
            <Navbar/>
        <h1>Home</h1>
        <Footer/>
                </div>
    );
}