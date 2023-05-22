import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <>
      <div>Personal Digital Assistant</div>
      <div className="container">
        <section className="section"></section>
        <div className="columns">
          <div className="column is-4">
            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
          </div>
          <div className="column is-4">
            <ProfileCard title="Cortana" handle="@cortana99" image={CortanaImage} />
          </div>
          <div className="column is-4">
            <ProfileCard title="Siri" handle="@siri99" image={SiriImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
