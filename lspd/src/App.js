// import logo from './logo.svg';
import './App.css';
import {Button} from "@nextui-org/button";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";
function App() {
  return (
    <div>
      <Button className="bg-green-400">Signin</Button>
      <Avatar isBordered className='bg-cyan-500'/> 
      <Avatar name="Junior" className='bg-cyan-500'/>
    </div>
  );
}


export default App;
