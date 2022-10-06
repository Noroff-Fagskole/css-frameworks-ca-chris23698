import {getUserName} from "../utils/storage";

function createHeaderBar() {
    const {pathname} = document.location;
    const navBar = document.querySelector("#nav-bar");
    const welcome = document.querySelector("#welcome-name");

    if (navBar) {
        const userName = getUserName();
        let navLinks;
         navLinks = `
            <li class="p-8"><a href="/signup.html" class="${pathname === "/signup.html" ? "text-blue-600" : ""}">SignUp</a></li>
            <li class="p-8"><a href="/login.html" class="${pathname === "/login.html" ? "text-blue-600" : ""}">LogIn</a></li>
            `;
            let welcomeName;
        if (userName) {
            navLinks = `
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
`
welcome.innerHTML = `
        <h1
            class="text-white text-3xl mb-10"
          >
            Welcome back, ${userName}!
          </h1>`
        }
        navBar.innerHTML = `
        <ul class="flex">
           ${navLinks}
        </ul>`
        
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