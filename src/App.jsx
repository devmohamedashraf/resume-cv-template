import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Summary from "./components/Summary.jsx";
import Recommendations from "./components/Recommendations.jsx";
import {Experience} from "./components/Experience.jsx";
import Design from "./components/Design.jsx";
import Tools from "./components/Tools.jsx";
import Languages from "./components/Languages.jsx";
import Education from "./components/Education.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import LatestProject from "./components/LatestProject.jsx";
import Tab from "./components/Tab.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <div className='py-20 m-auto max-w-5xl w-full px-4 space-y-4'>
            <Header />
            <Tab />
            <div className='lg:grid grid-cols-3 gap-2'>
                <div className='col-span-2 flex flex-col gap-2'>
                    <Summary />
                    <Experience />
                    <Recommendations />
                </div>
                <div className='flex flex-col gap-2'>
                    <Design />
                    <Tools />
                    <LatestProject />
                    <Languages />
                    <Education />
                    <SocialLinks />
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
