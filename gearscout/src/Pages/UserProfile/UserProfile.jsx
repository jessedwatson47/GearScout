import BioSection from "./BioSection";
import PeripheralSection from "./PeripheralSection";
import SteamSection from "./SteamSection";

function UserProfile() {
  return (
    <section className="max-w-screen-lg mx-auto flex flex-col gap-8 mt-8">
      <BioSection username="Neferhor" type="Professional" age="30" country="USA" padType="Control" gripType="Claw" img="/nef.png" topGenre="FPS" />
      <SteamSection />
      <PeripheralSection />
    </section>
  );
}

export default UserProfile;
