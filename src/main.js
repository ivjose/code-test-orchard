import { componentOne } from './componentOne.js'
import { componentTwo } from './componentTwo.js'
import AOS from "aos";
import 'aos/dist/aos.css';
import '../style.css'

document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    AOS.init();
  }
};

 
componentOne()
componentTwo()