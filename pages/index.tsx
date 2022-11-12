import { AddVideo } from "../src/components/AddVideo";
import { Header } from "../src/components/Header";
import { User } from "../src/components/User";
import { Videos } from "../src/components/Videos";

export default function Home() {
  return (
    <div>
      <Header />
      <User />
      <Videos />
      <AddVideo />
    </div>
  );
}
