import Mountain1 from '../asserts/2.jpg'
import Mountain2 from '../asserts/1.jpg'
import Mountain3 from '../asserts/5.jpg'
import Mountain4 from '../asserts/8.jpg'
import "./DestinationStyles.css";
import DestinationData from './DestinationData';


const Destination = ()=>{
    return (
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours gives you the opporunity to see a lot,within a time frame.</p>
        <DestinationData
        className="first-des"
        heading="Taal volcano ,Batangas"
        text="Taal Volcano (IPA: [taal]; Tagalog: Bulkang Taal) is a large caldera filled by Taal Lake in the Philippines.[1] Located in the province of Batangas, the volcano is second of the most active volcanoes in the country, with 38 recorded historical eruptions, all of which were concentrated on Volcano Island, near the middle of Taal Lake.[3] The caldera was formed by prehistoric eruptions between 140,000 and 5,380 BP"
        img1={Mountain1}
        img2={Mountain2}
        />
        <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul,Batangas"
        text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain."
        img1={Mountain3}
        img2={Mountain4}
        />
      </div>
    )
}
export default Destination;