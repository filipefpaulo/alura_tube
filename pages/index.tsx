import { AddVideo } from "../src/components/AddVideo";
import { Header } from "../src/components/Header";
import { User } from "../src/components/User";

export default function Home() {
  return (
    <div>
      <Header />
      <User />
      <AddVideo />
    </div>
  );
}
