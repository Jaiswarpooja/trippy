import Destination from '../components/Destination';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Trip from '../components/Trip';

function Home(){
return(
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1675789203977-70070dae0799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination"
    buttonText="Travel Plan"
    url="/"
    btnClass="show"/>
    <Destination/>
    <Trip/>
    <Footer/>
    </>
)
}
export default Home;