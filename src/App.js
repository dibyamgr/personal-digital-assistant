import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <>
      <div>Personal Digital Assistant</div>
      <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
      <ProfileCard title="Cortana" handle="@cortana99" image={CortanaImage} />
      <ProfileCard title="Siri" handle="@siri99" image={SiriImage} />
    </>
  );
}

export default App;
