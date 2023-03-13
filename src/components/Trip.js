import './TripStyles.css';
import TripData from './TripData';
import Trip1 from '../asserts/5.jpg';
import Trip2 from '../asserts/8.jpg';
import Trip3 from '../asserts/6.jpg';


function Trip(){
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
           <div className='tripcard'>
            <TripData
            image={Trip1}
            heading='Trip in Indonesia'
            text='Indonesia, officially Republic of Indonesia, formerly Netherlands East Indies, Archipelago country, located off the coast of mainland Southeast Asia. It comprises some 17,500 islands, of which more than 7,000 are uninhabited. Area: 740,122 sq mi (1,916,907 sq km). Population: (2023 est.) 278,946,000. Capital: Jakarta (on Java). Indonesia has more than 300 ethnic groups, which in the western islands fall into three broad divisions: the inland wet-rice cultivators.'
            />
            <TripData
            image={Trip2}
            heading='Trip in Malaysia'
            text='Malaysia is a beautifully complex vacation destination, a land where ancient rainforests give way to multicultural city life. Capital city Kuala Lumpur is visually defined by the iconic Petronas Twin Towers, while in charming Melaka the vibe is more quaint and historical. Many of the country’s national parks offer opportunities for fantastic whitewater rafting, and the exclusive Sipadan dive site (off the east coast of Borneo) is among the best in the world.'
            />
            <TripData
            image={Trip3}
            heading='Trip to France'
            text='At the end of the Antiquity period, ancient Gaul was divided into several Germanic kingdoms and a remaining Gallo-Roman territory, known as the Kingdom of Syagrius. Simultaneously, Celtic Britons, fleeing the Anglo-Saxon settlement of Britain, settled in the western part of Armorica. As a result, the Armorican peninsula was renamed Brittany, Celtic culture was revived and independent petty kingdoms arose in this region.'
            />
           </div>
        
        </div>
    );
}
export default Trip;