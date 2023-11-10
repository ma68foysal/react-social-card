import { useState } from 'react';
import CardForm from './CardForm';
import CardDetails from './CardDetails';
import { SocialContext } from './context/SocialContext';

import './social-card.css';
import LayouOne from './layout/LayouOne';
import LayoutTwo from './layout/LayoutTwo';
import LayoutThree from './layout/LayoutThree';
import LayoutFour from './layout/LayoutFour';
import LayoutFive from './layout/LayoutFive';
import LayoutSix from './layout/LayoutSix';
import LayoutSeven from './layout/LayoutSeven';
import LayoutEight from './layout/LayoutEight';
import Filters from './layout/Filters';

function SocialCard(props) {

  const [social, setSocial] = useState({});
  const value = { social, setSocial };
  const [cardTheme, setCardTheme] = useState({
    bc: '#f2d6d6',
    fc: '#212121',
    link: '#000000'
  });
  const [defult,setDefult]=useState(true)
  const [layoutOne,setLayoutOne]=useState(false)
  const [layoutTwo,setLayoutTwo]=useState(false)
  const [layoutThree,setLayoutThree]=useState(false)
  const [layoutFour,setLayoutFour]=useState(false)
  const [layoutFive,setLayoutFive]=useState(false)
  const [layoutSix,setLayoutSix]=useState(false)
  const [layoutSeven,setLayoutseven]=useState(false)
  const [layoutEight,setLayoutEight]=useState(false)
  const applyTheme = (theme) => {
    let bc = '';
    let fc = '';
    let link = '';
    switch (theme) {
      case 'dark':
        bc = '#212121';
        fc = '#f2d6d6';
        link = '#ffffff';

        break;
      case 'pest':
        bc = '#b2e5e6';
        fc = '#000000';
        link = '#a0cdcf';

        break;
      case 'gradient':
        bc = '#e66465';
        fc = '##9198e5';
        link = '#000000';

        break;
      case 'light':
        bc = '#f2d6d6';
        fc = '#212121';
        link = '#000000';

        break;
      case 'red':
        bc = '#f44336';
        fc = '#ffffff';
        link = '#ffffff';

        break;
      case 'green':
        bc = '#4caf50';
        fc = '#ffffff';
        link = '#ffffff';

        break;
      case 'blue':
        bc = '#2196f3';
        fc = '#ffffff';
        link = '#ffffff';

        break;
      case 'yellow':
        bc = '#ffeb3b';
        fc = '#000000';
        link = '#000000';

        break;
      case 'oreng':
        bc = 'linear-gradient(#dE685E, #EE786E)';
        fc = '#000000';
        link = '#000000';

        break;
      default:
        break;
    }
    setCardTheme({
      ...cardTheme,
      bc: bc,
      fc: fc,
      link: link
    });
  };

  const applyLayout = (layout)=>{
    let style={
    value:"column",
    status : true
  }
    switch (layout) {
      case 'one':
        setLayoutOne(true)
        setLayoutTwo(false)
        setLayoutThree(false)
        setLayoutFour(false)
        setLayoutFive(false)
        setLayoutSix(false)
        setLayoutseven(false)
        setLayoutEight(false)
        setDefult(false)

        break;
      case 'two':
        setLayoutTwo(true)
        setLayoutOne(false)
        setLayoutThree(false)
        setLayoutFour(false)
        setLayoutFive(false)
        setLayoutSix(false)
        setLayoutseven(false)
        setLayoutEight(false)
        setDefult(false)

        break;
      case 'three':
        setLayoutOne(false)
        setLayoutTwo(false)
        setLayoutThree(true)
        setLayoutFour(false)
        setLayoutFive(false)
        setLayoutSix(false)
        setLayoutseven(false)
        setLayoutEight(false)
        setDefult(false)

      

        break;
      case 'four':
        setLayoutOne(false)
        setLayoutTwo(false)
        setLayoutThree(false)
        setLayoutFour(true)
        setLayoutFive(false)
        setLayoutSix(false)
        setLayoutseven(false)
        setLayoutEight(false)
        setDefult(false)


        break;
      case 'five':
        setLayoutOne(false)
        setLayoutTwo(false)
        setLayoutThree(false)
        setLayoutFour(false)
        setLayoutFive(style)
        setLayoutSix(false)
        setLayoutseven(false)
        setLayoutEight(false)
        setDefult(false)
      


        break;
      case 'six':
        setLayoutOne(false)
        setLayoutTwo(false)
        setLayoutThree(false)
        setLayoutFour(false)
        setLayoutFive(false)
        setLayoutSix(true)
        setLayoutseven(false)
        setLayoutEight(false)
        setDefult(false)


        break;
      case 'seven':
        setLayoutOne(false)
        setLayoutTwo(false)
        setLayoutThree(false)
        setLayoutFour(false)
        setLayoutFive(false)
        setLayoutSix(false)
        setLayoutseven(true)
        setLayoutEight(false)
        setDefult(false)


        break;
      case 'eight':
        setLayoutOne(false)
        setLayoutTwo(false)
        setLayoutThree(false)
        setLayoutFour(false)
        setLayoutFive(false)
        setLayoutSix(false)
        setLayoutseven(false)
        setLayoutEight(true)
        setDefult(false)


        break;
      case 'default':
        setDefult(true)
        setLayoutOne(false)
        setLayoutTwo(false)
        setLayoutThree(false)
        setLayoutFour(false)
        setLayoutFive(false)
        setLayoutSix(false)
        setLayoutseven(false)
        setLayoutEight(false)

        break;
      default:
        break;
    }
  }
  const layoutObj ={
    layoutOne,
    layoutTwo,
    defult,
    layoutThree,
    layoutFour,
    layoutFive,
    layoutSix,
    layoutSeven,
    layoutEight,
  }
  return (
    <>
      <div className="play-details">
        
        <div className="play-details-body">
          <div className="social-card-body">
            <div style={{ textAlign: 'center' }}>
              <h2>Create your Social Card</h2>
              <p>Please fill the form below to create a Social Card for you.</p>
            </div>
            <SocialContext.Provider value={value}>
              <div className="social-card" style={{flexDirection:layoutFive.value}}>
                <CardForm />
                <CardDetails cardTheme={cardTheme} layoutObj={layoutObj} />
                <Filters applyTheme={applyTheme} applyLayout={applyLayout} />
              </div>
            </SocialContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialCard;
