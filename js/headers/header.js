import {getUserName} from "../utils/storage";


function createHeaderBar() {
    const {pathname} = document.location;
    const navBar = document.querySelector("#nav-bar");
    const welcome = document.querySelector("#main-header");
    function refreshPage(){
      window.location.reload();
    } 

    if (navBar) {
        const userName = getUserName();
        let navLinks;
     //    navLinks = `
    //        <li class="p-8"><a href="/signup.html" class="${pathname === "/signup.html" ? "text-blue-600" : ""}">SignUp</a></li>
      //      <li class="p-8"><a href="/login.html" class="${pathname === "/login.html" ? "text-blue-600" : ""}">LogIn</a></li>
      //      `;
     //       let welcomeName;
        if (userName) {
            navLinks = `
            <div class="nav relative z-10 w-full shadow-sm bg-secondary">
        <div class="nav-container w-full bg-secondary fixed top-0 left-0 right-0">
            <nav class="p-5 bg-secondary shadow md:flex md:items-center md:justify-between w-full max-w-screen-lg px-5 mx-auto  ">
              <div class="flex justify-between items-center">
            <a href="homepage.html">   <button class="text-4xl text-main-text cursor-pointer">NERDS</button></a>
               <span class="text-3xl cursor-pointer mx-2 md:hidden block text-white">
                 <ion-icon name="menu" onclick="Menu(this)"></ion-icon>       
               </span>
              </div>
              <div class="search-wrapper w-max flex flex-col gap-0.5">
              <input type="search" id="search" placeholder="search user" class="p-2 w-max rounded-md bg-primary text-white border-stone-500" user-search>
              </div>
              <div class="user-cards auto-cols-auto flex gap-x-1 mt-4" user-card-container></div>
              <template user-template>
              <div class="card p-2 rounded-sm bg-secondary text-white">
              <div class="header" user-header></div>
              <div class="body" user-body></div>
              </div>
              </template>
              <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-secondary w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
              <li class=" text-white bg-transparent p-4 rounded s" ><button id="profile-btn">${userName}</button></li>
                 <li class=" text-white bg-main-text p-2 rounded hover:bg-hover-btn duration-500" ><button id="logout-btn">SIGN OUT</button></li>
               
              </ul>
             </nav>
          </div>
     </div>

           
`
welcome.innerHTML = `
        <h1
            class="text-white text-3xl mb-10 text-center"
          >
            Welcome back, ${userName}!
          </h1>
          <div
          id="modal"
          class="friends cursor-pointer bg-main-text shadow-lg rounded-full w-20 h-20 m-auto items-center grid fixed top-3/4 left-3/4 hover:bg-hover-btn duration-500"
        >
          <img
            class="items-center m-auto pb-1"
            src="./img/friends.png"
            alt=""
          />
        </div>
        <div
          class="b bg-black bg-opacity-50 inset-0 hidden justify-center items-center fixed"
          id="overlay"
        >
          <div class="bg-grey-200 rounded">
            <div
              class="bg-secondary p-10 mx-4 rounded md:max-w-md text-white max-h-3/4"
            >
              <h1 class="mb-3 text-bold text-2xl">
                ACTIVE
              </h1>
              <div
                class="friends flex text-center items-center space-x-5"
              >
                <div class="profile-picture p-2">
                  <img
                    class="rounded-full w-10 h-10"
                    src="./img/pexels-thyrone-paas-1722198.jpg"
                    alt=""
                  />
                </div>
                <div class="name text-light">
                  Thomas Kilen
                </div>
                <div class="btn">
                  <button
                    class="px-2 h-6 text-sm md:text-lg md:w-36 md:h-8 bg-main-text rounded text-white text-2xl my-2 hover:bg-hover-btn duration-500"
                  >
                    MESSAGE
                  </button>
                </div>
              </div>
              <div
                class="friends flex text-center items-center space-x-5"
              >
                <div class="profile-picture p-2">
                  <img
                    class="rounded-full w-10 h-10"
                    src="./img/pexels-thyrone-paas-1722198.jpg"
                    alt=""
                  />
                </div>
                <div class="name text-light">
                  Thomas Kilen
                </div>
                <div class="btn">
                  <button
                    class="px-2 h-6 text-sm md:text-lg md:w-36 md:h-8 bg-main-text rounded text-white text-2xl my-2 hover:bg-hover-btn duration-500"
                  >
                    MESSAGE
                  </button>
                </div>
              </div>
              <div
                class="friends flex text-center items-center space-x-5"
              >
                <div class="profile-picture p-2">
                  <img
                    class="rounded-full w-10 h-10"
                    src="./img/pexels-thyrone-paas-1722198.jpg"
                    alt=""
                  />
                </div>
                <div class="name text-light">
                  Thomas Kilen
                </div>
                <div class="btn">
                  <button
                    class="px-2 h-6 text-sm md:text-lg md:w-36 md:h-8 bg-main-text rounded text-white text-2xl my-2 hover:bg-hover-btn duration-500"
                  >
                    MESSAGE
                  </button>
                </div>
              </div>
              <div
                class="friends flex text-center items-center space-x-5"
              >
                <div class="profile-picture p-2">
                  <img
                    class="rounded-full w-10 h-10"
                    src="./img/pexels-thyrone-paas-1722198.jpg"
                    alt=""
                  />
                </div>
                <div class="name text-light">
                  Thomas Kilen
                </div>
                <div class="btn">
                  <button
                    class="px-2 h-6 text-sm md:text-lg md:w-36 md:h-8 bg-main-text rounded text-white text-2xl my-2 hover:bg-hover-btn duration-500"
                  >
                    MESSAGE
                  </button>
                </div>
              </div>
              <div
                class="friends flex text-center items-center space-x-5"
              >
                <div class="profile-picture p-2">
                  <img
                    class="rounded-full w-10 h-10"
                    src="./img/pexels-thyrone-paas-1722198.jpg"
                    alt=""
                  />
                </div>
                <div class="name text-light">
                  Thomas Kilen
                </div>
                <div class="btn">
                  <button
                    class="px-2 h-6 text-sm md:text-lg md:w-36 md:h-8 bg-main-text rounded text-white text-2xl my-2 hover:bg-hover-btn duration-500"
                  >
                    MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="div flex flex-row">
          <div class="wave ml-2 animate-bounce">
            <img src="./img/wave.png" alt="" />
          </div>
        </div>
        <div class="text-input max-w-3xl">
         <h4 class="text-white">Anything On Your Mind?</h4>
        </div>
        <hr
          class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4 max-w-lg"
        />

        <div class=" text-white  bg-main-text p-2 rounded hover:bg-hover-btn duration-500" ><button id="create-btn">Create A Post</button></div>

          
          `
        }
        navBar.innerHTML = `
        <ul class="flex">
           ${navLinks}
        </ul>
        
        
        
        `
        
    }
    
}


export default createHeaderBar;

/* 
INDEX HEADER

<div
        class="nav-container relative z-10 w-full shadow-sm bg-secondary"
      >
        <nav
          class="p-5 bg-secondary shadow md:flex md:items-center md:justify-between w-full max-w-screen-lg px-5 mx-auto sticky top-0"
        >
          <div
            class="flex justify-between items-center"
          >
            <span
              class="text-4xl text-main-text cursor-pointer"
            >
              NERDS
            </span>
          </div>
        </nav>
      </div>


*/
/* 
HOMEPAGE HEADER

<div class="nav relative z-10 w-full shadow-sm bg-secondary">
        <div class="nav-container w-full bg-secondary fixed top-0 left-0 right-0">
            <nav class="p-5 bg-secondary w-full shadow md:flex md:items-center md:justify-between w-full max-w-screen-lg px-5 mx-auto  ">
              <div class="flex justify-between items-center">
               <span class="text-4xl text-main-text cursor-pointer">
                 NERDS
               </span>
               <span class="text-3xl cursor-pointer mx-2 md:hidden block text-white">
                 <ion-icon name="menu" onclick="Menu(this)"></ion-icon>       
               </span>
              </div>
              <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-secondary w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
               <li class="mx-4 my-6 md:my-0">
                 <a href="./profile.html" class="text-md text-white hover:text-main-text duration-500">PROFILE</a>
               </li>
               <li class="mx-4 my-6 md:my-0">
                 <a href="./index.html" class="text-md text-white"><button class="bg-main-text p-2 rounded hover:bg-hover-btn duration-500">SIGN OUT</button></a>
               </li>
              </ul>
             </nav>
          </div>
     </div>




*/


/*
HESH HEADER

 <li class="p-8">
                <a href="/index.html" class="${pathname === "/index.html" ? "text-blue-600" : ""}">Home</a>
            </li>
            <li class="p-8">
                <a href="/create-post.html" class="${pathname === "/create-post.html" ? "text-blue-600" : ""}">Create Post🎨</a>
            </li>
            <li class="p-8">
                <a href="/my-posts.html" class="${pathname === "/my-posts.html" ? "text-blue-600" : ""}">My Posts💞</a>
            </li>
            <li class="p-8"><span>Hello 👋  ${userName}</span></li>
            <li class="p-8">
            
            <button id="logout-btn">LogOut</button>
            </li>




*/