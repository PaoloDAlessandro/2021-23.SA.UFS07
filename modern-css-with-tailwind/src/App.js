/***
 * Excerpted from "Modern CSS with Tailwind",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tailwind for more book information.
***/
import music from './music.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Welcome to NorthBy</h1>

      <br/><br/>
      <hr/ >
      <br/><br/>


      <div class="flex">
        <div>
          <img src={music} size="100x100" alt="Logo" />;
        </div>
        <div>
          <h1>Welcome to NorthBy</h1>
          <h2>A premium in sight and sound</h2>
          <button>Learn More</button>
        </div>
      </div>

      <br/><br/>
      <hr/ >
      <br/><br/>


      <div class="flex justify-center">
        <div class="mx-4 order-last">
          <img src={music} size="100x100" alt="Logo" />;
        </div>
        <div class="mx-4 self-center">
          <h1>Welcome to NorthBy</h1>
          <h2>A premium in sight and sound</h2>
          <button>Learn More</button>
        </div>
      </div>

      <br/><br/>
      <hr/ >
      <br/><br/>

      <div class="flex justify-center bg-gray-300">
        <div class="mx-4 order-last">
          <img src={music} size="100x100" alt="Logo" />;
        </div>
        <div class="mx-4 self-center text-center">
          <h1 class="text-6xl font-bold text-blue-700">Welcome to NorthBy</h1>
          <h2 class="text-3xl font-semibold text-blue-300">
            A premium in sight and sound
          </h2>
          <button>Learn More</button>
        </div>
      </div>

      <br/><br/>
      <hr/ >
      <br/><br/>

      <div class="flex justify-center bg-gray-300">
        <div class="mx-4 order-last self-center">
          <img src={music} size="100x100" alt="Logo" class="rounded-full"/>;
        </div>
        <div class="mx-4 self-center text-center">
          <h1 class="text-6xl font-bold text-blue-700">Welcome to NorthBy</h1>
          <h2 class="text-3xl font-semibold text-blue-300">
            A premium in sight and sound
          </h2>
          <button class="my-4 px-4 py-2 border-2 border-black rounded-lg
                        text-white bg-blue-900">
            Learn More
          </button>
        </div>
      </div>

      <br/><br/>
      <hr/ >
      <br/><br/>
      <br/><br/>
      <hr/ >
      <br/><br/>
      <br/><br/>
      <hr/ >
      <br/><br/>

      <div>
        <div class="mb-10">
          <button class="p-10 border border-black">One</button>
          <button class="m-10 border border-black">Two</button>
          <button class="m-2 p-2 border-4 border-black">Three</button>
        </div>
        <div>
          <button class="m-4 p-4 border-2 border-black rounded-md">Four</button>
          <button class="m-4 p-4 border-2 border-black rounded-2xl">Five</button>
          <button class="m-4 p-4 border-2 border-black rounded-full">Six</button>
        </div>
      </div>

      <br /><br />
      <hr/ >
      <br /><br />

      <div>
        <button class="m-4 p-4 rounded-md ring">Four</button>
        <button class="m-4 p-4 rounded-2xl ring-2">Five</button>
        <button
          class="m-4 p-4 rounded-full ring-4 ring-offset-4 ring-offset-black">
          Six
        </button>
      </div>

      <br /><br />
      <hr/ >
      <br /><br />

      <div class="bg-gray-50 p-10">
        <div class="mb-10">
          <button class="p-10 mx-10 shadow-sm bg-white">One</button>
          <button class="p-10 mx-10 shadow-sm bg-white">Two</button>
          <button class="p-10 mx-10 shadow-lg bg-white">Three</button>
        </div>
        <div>
          <button class="p-10 mx-10 shadow-xl bg-white">Four</button>
          <button class="p-10 mx-10 shadow-2xl bg-white">Five</button>
          <button class="p-10 mx-10 shadow-inner bg-white">Six</button>
        </div>
      </div>


      <br /><br />
      <hr/ >
      <br /><br />

      <div>
        <div class="mb-10 bg-gradient-to-r from-gray-50 to-black p-10 w-1/2">
          <button class="p-10 mx-10 bg-white">One</button>
          <button class="p-10 mx-10 bg-white">Two</button>
        </div>
        <div class="mb-10
                    bg-gradient-to-r from-gray-50 via-black to-gray-50
                    p-10 w-1/2">
          <button class="p-10 mx-10 bg-white">Three</button>
          <button class="p-10 mx-10 bg-white">Four</button>
        </div>
      </div>

      <br /><br />
      <hr/ >
      <br /><br />

      <div class="bg-gray-50">
        <div class="text-6xl font-bold p-10">
          <div class="bg-clip-text text-transparent
                      bg-gradient-to-l from-gray-50 to-black
                      py-2">
            NorthBy: A Premium in Sight and Sound
          </div>
        </div>
      </div>

      <br /><br />
      <hr/ >
      <br /><br />

      <br /><br />
      <hr/ >
      <br /><br />

      <br /><br />
      <hr/ >
      <br /><br />

      <table class="table-fixed border border-collapse">
        <tr>
          <th class="border border-black w-1/6">Small</th>
          <th class="border border-black w-2/6">Medium</th>
          <th class="border border-black w-3/6">Large</th>
        </tr>
      </table>

      <br /><br />
      <hr/ >
      <br /><br />

      <div class="grid grid-cols-2 w-1/4 gap-4">
        <div class="border bg-gray-300 text-center">A</div>
        <div class="border bg-gray-300 text-center">B</div>
        <div class="border bg-gray-300 text-center">C</div>
        <div class="border bg-gray-300 text-center">D</div>
      </div>

      <br /><br />
      <hr/ >
      <br /><br />

      <div class="grid grid-rows-2 w-1/4 gap-4 grid-flow-col">
        <div class="border bg-gray-300 text-center">A</div>
        <div class="border bg-gray-300 text-center">B</div>
        <div class="border bg-gray-300 text-center">C</div>
        <div class="border bg-gray-300 text-center">D</div>
      </div>

      <br /><br />
      <hr/ >
      <br /><br />

      <div class="grid grid-cols-2 w-1/4 gap-4">
        <div class="border bg-gray-300 text-center col-span-2">A</div>
        <div class="border bg-gray-300 text-center">B</div>
        <div class="border bg-gray-300 text-center">C</div>
        <div class="border bg-gray-300 text-center">D</div>
      </div>

      <br /><br />
      <hr/ >
      <br /><br />

      <div class="grid grid-cols-2 w-1/4 gap-4">
        <div class="border bg-gray-300 text-center row-span-2">A</div>
        <div class="border bg-gray-300 text-center">B</div>
        <div class="border bg-gray-300 text-center">C</div>
        <div class="border bg-gray-300 text-center">D</div>
      </div>

      <br /><br />
      <hr/ >
      <br /><br />

      <div class="grid grid-cols-3 gap-4 w-1/3">
        <div class="text-center col-span-3">Header</div>
        <div class="text-center w-1/5">Left Sidebar</div>
        <div class="text-center w-3/5">Content</div>
        <div class="text-center w-1/5">Right Sidebar</div>
        <div class="text-center col-span-3">Footer</div>
      </div>

      <br /><br />
      <hr/ >
      <br /><br />

      <div class="flex flex-col w-1/3">
        <div class="flex-grow">Header</div>
        <div class="flex flex-row">
          <div class="text-center w-1/5">Left Sidebar</div>
          <div class="text-center w-3/5">Content</div>
          <div class="text-center w-1/5">Right Sidebar</div>
        </div>
        <div class="flex-grow">Footer</div>
      </div>

      <br /><br />
      <hr/ >
      <br /><br />

      <div class="flex flex-row flex-wrap w-1/3">
        <div class="w-full">Header</div>
        <div class="text-center w-1/5">Left Sidebar</div>
        <div class="text-center w-3/5">Content</div>
        <div class="text-center w-1/5">Right Sidebar</div>
        <div class="w-full">Footer</div>
      </div>

      <br /><br />
      <hr/ >
      <br /><br />

      <div class="flex flex-row flex-wrap w-1/3">
        <div class="text-center w-3/5 order-3">Content</div>
        <div class="w-full order-1">Header</div>
        <div class="text-center w-1/5 order-2">Left Sidebar</div>
        <div class="text-center w-1/5 order-4">Right Sidebar</div>
        <div class="w-full order-5">Footer</div>
      </div>


    </>
  );
}

export default App;
