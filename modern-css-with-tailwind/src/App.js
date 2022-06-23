/***
 * Excerpted from "Modern CSS with Tailwind",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tailwind for more book information.
***/
import './App.css';
import AccentureLogo from "./accenture_logo.png";
import ImpactImage from "./impact_image.svg";
import TeamWorkImage from "./team_work.jpg";
import AccetureIcon from "./accenture_icon.svg";
import ArrowDownIcon from "./arrow_down.svg";

function App() {
  return (
    <>
      <header class="sticky z-50 top-0 w-11/12 h-20 rounded-md shadow-sm bg-white mr-auto ml-auto mb-6">
        <div class="flex items-center justify-between h-full w-11/12  mr-auto ml-auto">
          <div id="logo" class="">
            <img src={AccentureLogo} class="w-28" alt="accenture logo"></img>
          </div>
          <nav class="flex w-1/3 font-medium justify-evenly text-blue-800 duration-200">
            <a href="#home" class="hover:text-indigo-900">home</a>
            <a href="#workwithus" class="hover:text-indigo-900">work with us</a>
            <a href="#solutions" class="hover:text-indigo-900">solutions</a>
            <a href="#aboutus" class="hover:text-indigo-900">about us</a>
          </nav>
        </div>
      </header>

      <div class = "relative -top-12 h-screen w-screen">
        <div class="absolute h-auto w-max top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 class="text-9xl font-bold"><span class = "opacity-0 animate-fade-in-1">Let</span> <span class="opacity-0 animate-fade-in-2">there</span> <span class="opacity-0 animate-fade-in-3">be</span> <span class="opacity-0 animate-fade-in-4">change</span></h2>
          <div class="animate-fade-in-arrow">

          <div class = "relative animate-bounce w-12 h-12 mt-44 rounded-full bg-blue-300 ml-auto mr-auto border border-gray-300">
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a href="#developer">          
            <img class="w-4" src={ArrowDownIcon}></img>
            </a>
          </div>
          </div>
          </div>
        </div>
      </div>

      <div class="w-4/5 mr-auto ml-auto mt-14">
      <div id="developer" class="relative -top-3 left-11">
        <h2 class="text-center w-min font-bold text-8xl ">Developer</h2>
      </div>
        <div class="flex w-4/5 h-fit shadow-lg ml-auto mr-auto rounded-md bg-white">
          <div class="w-2/5 h-full border-r border-gray-500">
            <img src={TeamWorkImage} class="w-max rounded-l-md" alt="team work"></img>
          </div>

          <div class="w-3/5 flex items-center flex-col p-11 justify-center">
              <img src={AccetureIcon} class = "w-12 drop-shadow-md" alt = "accenture icon"></img>
              <h4 class="text-lg font-bold mt-5">We are hiring!</h4>
              <a href='#developerapply' class="font-medium bg-blue-300 px-8 py-4 rounded-xl mt-4 duration-150 hover:bg-blue-400" >Easy apply</a>
          </div>

        </div>
      </div>


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </>
  );
}

export default App;
