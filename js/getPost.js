import moment from "moment";

import {GET_POSTS_URL} from "./settings/api";
import {getToken} from "./utils/storage";

const getPost = document.querySelector("#get-posts");

const postError = document.querySelector("#post-errors")

const token = getToken();
const getURL = GET_POSTS_URL ;

if (!token){
    location.href = "/index.html"
}

(async function getThePosts () {
const response = await fetch("https://nf-api.onrender.com/api/v1/social/posts?_author=true&_comments=true&_reactions=true", {
    method: "GET",
    headers:{ "content-Type": "application/json",
    "Authorization": `Bearer ${token}`
}
})
if (response.ok) {
    const getPosts = await response.json();
    let time = moment(new Date()); 
if (!getPosts.length) {
    postError.innerHTML = `SORRY NO POSTS`
}
else {
    const postLists = getPosts.map((post) => {
        const author= "https://nf-api.onrender.com/api/v1/social/posts/?_author=true"
        const titleOfPosts = post.title;
        const postMessage = post.body;
        const whenPostCreated = post.created;
        const postCreation = time.diff(whenPostCreated, 'minutes');
        const postMedia = post.media;
        const theAuthor = post.author.name;
        const theAvatar = post.author.avatar;
        if (theAvatar === ""){
            if (postMedia === ""){
                return (`
                <a href="/singlePost.html?post_id=${post.id}"   <li class="mt-20 p-28">
                <div class="post mb-10">
                  <div
                    class="peronsal-info flex text-center items-center"
                  >
                    <div class="profile-picture p-2">
                      <img
                        class="rounded-full w-10 h-10"
                        src="./img/nerds-L.png"
                        alt=""
                      />
                    </div>
                    <div class="name">
                      <span class="text-lg text-white text-bold"
                        >${theAuthor}</span
                      >
                    </div>
                  </div>
                <div class="post-content border-white rounded flex flex-col items-center">
                <div class="content-style w-full ">
                <h1 class="text-white  text-center">${titleOfPosts}</h1>
                <p class="text-main-text  text-center">${postMessage}</p>
                <time datetime="2021-01-27T16:35" class="flex mr-10 text-white ">${postCreation} minutes ago
                                </time>
                </div>
                </div>
                </div>
                </li> </a>
                `
                )
               } else {
                return (`
                <a href="/singlePost.html?post_id=${post.id}"        <li class="mt-20 p-28">
                <div class="post mb-10">
                  <div
                    class="peronsal-info flex text-center items-center"
                  >
                    <div class="profile-picture p-2">
                      <img
                        class="rounded-full w-10 h-10"
                        src="./img/nerds-L.png"
                        alt=""
                      />
                    </div>
                    <div class="name">
                      <span class="text-lg text-white text-bold"
                        >${theAuthor}</span
                      >
                    </div>
                  </div>
                <div class="post-content flex flex-col items-center">
                <div class="content-style  w-full ">
                <h1 class="text-white text-center">${titleOfPosts}</h1>
                <h1 class="text-main-text   text-center">${postMessage}</h1>
                
                <img
                        class=" justify-center m-auto items-center text-white h-40 w-80 pt-4"
                        src="${postMedia}"
                        alt="media"
                      />
                      <time datetime="2021-01-27T16:35" class="flex mr-10 text-white ">${postCreation} minutes ago
                                </time>
                      </div>
                </div>
                </li> </a>
                `
    )}}
        else {
            if (postMedia === ""){
                return (`
                <a href="/singlePost.html?post_id=${post.id}"              <li class="mt-20 p-28">
                <div class="post mb-10">
                  <div
                    class="peronsal-info flex text-center items-center"
                  >
                    <div class="profile-picture p-2">
                      <img
                        class="rounded-full w-10 h-10"
                        src="${theAvatar}"
                        alt=""
                      />
                    </div>
                    <div class="name">
                      <span class="text-lg text-white text-bold"
                        >${theAuthor}</span
                      >
                    </div>
                  </div>
                <div class="post-content border-white rounded flex flex-col items-center">
                <div class="content-style w-full ">
                <h1 class="text-white  text-center">${titleOfPosts}</h1>
                <p class="text-main-text    text-center">${postMessage}</p>
                <time datetime="2021-01-27T16:35" class="flex mr-10 text-white ">${postCreation} minutes ago
                                </time>
                </div>
                </div>
                </div>
                </li> </a>
                `
                )
    } else {
                return (`
                <a href="/singlePost.html?post_id=${post.id}"             <li class="mt-20 p-2">
                <div class="post mb-10">
                  <div
                    class="peronsal-info flex text-center items-center"
                  >
                    <div class="profile-picture p-2">
                      <img
                        class="rounded-full  w-10 h-10"
                        src="${theAvatar}"
                        alt=""
                      />
                    </div>
                    <div class="name">
                      <span class="text-lg text-white text-bold"
                        >${theAuthor}</span
                      >
                    </div>
                  </div>
                <div class="post-content flex flex-col items-center">
                <div class="content-style  w-full ">
                <h1 class="text-white text-center">${titleOfPosts}</h1>
                <h1 class="text-main-text text-center">${postMessage}</h1>
                
                <img
                        class=" justify-center m-auto items-center text-white h-40 w-80 pt-4"
                        src="${postMedia}"
                        alt="media"
                      />
                      <time datetime="2021-01-27T16:35" class="flex mr-10 text-white ">${postCreation} minutes ago
                                </time>
                      </div>
                </div>
                </li></a>
                `
    )}
    
    }   
    })
    .join('');
            getPost.insertAdjacentHTML('beforeend', postLists);
}
}
else {
    const generalError = await response.json();
    await Promise.reject(new Error("Getting Post Failed"))
}
})().catch(generalError => {
postError.innerHTML = generalError
});











