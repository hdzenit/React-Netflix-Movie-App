import Featured from '../../featured/Featured';
import Navbar from '../../navbar/Navbar';
import List from '../../list/List';
import "./home.scss";

export default function Home() {
  return (
    <div className='home'>
        <Navbar />
      <Featured />
        <List />
        <List />
        <List />
        <List />
    </div>
  )
}

