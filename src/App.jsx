import { useState } from 'react';
import './index.css';
import YoutubeEmbed from './youtubeEmbed';

// Array of phrases to be displayed when the "NO" button is clicked
const phrases = [
  "dont try it...",
  "You capping rn?",
  "Cmon you fucking with me now😕",
  "Pleaseee🥺",
  "Say yes",
  "Pick YES"
]

function App() {
  const [noCount, setNoCount] = useState(0); // State to keep track of the number of clicks on the "NO" button
  const [yesPressed, setYesPressed] = useState(false); // State to check if the "YES" button has been clicked
  const yesButtonSize = noCount * 20 + 16; // Dynamic adjustment of the "YES" button size based on the number of clicks on the "NO" button

  // Function to handle the click on the "YES" button
  function handleYesClick() {
    setYesPressed(true)
  }

  // Function to handle the click on the "NO" button
  function handleNoClick() {
    setNoCount(noCount+1);
  }

  // Function to get the text for the "NO" button based on the current number of clicks
  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (  // Display content after clicking the "YES" button
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" />
          <div classname="youtubeEmbed">
            <YoutubeEmbed embedId="HcdCjXPR9D8" />
          </div>
          <div className='text'>Watch me!</div>
        </>
      ) : ( // Display content before clicking the "YES" button
        <>
          <img className='kiss' src="https://i.pinimg.com/originals/73/89/aa/7389aaa2a73b071ee7d3d782310e590b.gif" alt="bear with heart" />
          <div className='text'>Will you be my valentine baby🌹?</div>
          <div className='both-Button'>
            <button className='yesButton'
            style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              YES
            </button>
            <button
              className='NoButton'
              style={{ }}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
