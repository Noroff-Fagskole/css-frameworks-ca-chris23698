import {getToken} from "./utils/storage";
import {GET_POST_BY_ID_URL} from "./settings/api";
import moment from "moment";

const parameterString = window.location.search;
const searchTheParameter = new URLSearchParams(parameterString);
const postId = searchTheParameter.get("post_id");
const token = getToken();
const singlePost = document.querySelector("#single-post");
const URL = GET_POST_BY_ID_URL;
console.log(singlePost);
console.log(GET_POST_BY_ID_URL);
console.log(postId);
console.log(token);
const likeBtn = document.querySelector("#post-likes")

async function getById() {
    const response = await fetch(`${URL}/${postId}?_author=true&_comments=true&_reactions=true`, {
    method: "GET",
    headers:{ "content-Type": "application/json",
    "Authorization": `Bearer ${token}`
    }}
    )
    console.log(response);
    const postByIdData = await response.json();
    console.log(postByIdData);
    const {title, body, created, updated, id, comments, reactions} = postByIdData;
    console.log(title);
    console.log(body);
    console.log(created);
    console.log(updated);
    console.log(id);
    console.log(comments);
    console.log(reactions);

    const whenPostUpdated = postByIdData.updated;
    const theAvatar = postByIdData.author.avatar;
    const postMedia = postByIdData.media;
    const theAuthor = postByIdData.author.name;
    const titleOfPosts = postByIdData.title;
    const symbol = postByIdData.reactions;

  console.log(symbol);
  
const reactionData = {
  "count": postByIdData.reactions
}
console.log(reactionData);


let comment = "";
let owner = "";
for (let i=0; i < postByIdData.comments.length; i++){
    comment += "From: " + postByIdData.comments[i].owner + "<br>" + "<br>"
 + postByIdData.comments[i].body + "<br>" + "<br>" + "<br>"

} if (comment === "") {
    document.getElementById("post-owner").innerHTML = `<h2 class="text-text-red-200">No comments</h2>`;
} else {
    document.getElementById("post-comments").innerHTML = comment;
}

let likes = "";
for (let i=0; i < postByIdData.reactions.length; i++) {
    likes +=   postByIdData.reactions[i].count  +  postByIdData.reactions[i].symbol;
} 
if (likes === "") {
    document.getElementById("post-likes").innerHTML = `0 Likes`;
}
else {
    document.getElementById("post-likes").innerHTML = likes;
}
/*
likeBtn.addEventListener("click", function(event){
const response = await fetch (`${URL}/${postId}/react/<symbol>`,{
   method: "PUT",
 headers:{ "content-Type": "application/json",
 "Authorization": `Bearer ${token}`
},
 body: JSON.stringify(reactionData)
})
 console.log("click")
 console.log(response);
}
)*/

// https://nf-api.onrender.com/api/v1/social/posts/${postId}/react/<symbol>
/*
likeBtn.addEventListener("click", function(event){

  (async function likePost() {
    const response = await fetch("https://nf-api.onrender.com/api/v1/social/posts/postId/react", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify(reactionData)
    })
    console.log("post Edition response: ", response)
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("Edit POST SUCCEEDED!!");
    } else {
        const err = await response.json();
        const message = "Editing post failed";
        throw new Error(message)
    }
})().catch(err => {
    console.log(err);
});
} 
)*/


    let time = moment(new Date()); 
    const postCreation = time.diff(whenPostUpdated, 'minutes');

if (theAvatar === ""){
    if (postMedia === ""){
      return  singlePost.innerHTML = (`
<li class="" style="margin-top:20px">
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
        <p class="text-red-200 mb-10  text-center">${body}</p>
        <time datetime="2021-01-27T16:35" class="flex mr-10 text-gray-500 ">Updated ${postCreation} min ago
                        </time>

        </div>
        </div>
        </div>
        
        </li>
        <div class="comments flex flex-col ">


        
        </div>
        `
                  )
  } else {
        return singlePost.innerHTML =(`
       <li class=" "  style="margin-top:20px">
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
        <h1 class="text-red-200 mb-10 text-center">${body}</h1>
        
        <img
                class=" justify-center m-auto items-center  h-40 w-80 pt-4"
                src="${postMedia}"
                alt="media"
              />
              <time datetime="2021-01-27T16:35" class="flex mr-10 text-gray-500 ">Updated ${postCreation} min ago
                        </time>
              </div>
        </div>
        </li> 
        `
)}}
else {
    if (postMedia === ""){
        return singlePost.innerHTML =(`
             <li class="" style="margin-top:20px">
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
        <p class="text-red-200 mb-10  text-center">${body}</p>
        <time datetime="2021-01-27T16:35" class="flex mr-10 text-gray-500 ">Updated ${postCreation} min ago
                        </time>
        </div>
        </div>
        </div>
        </li>
        `
        )
} else {
        return singlePost.innerHTML =(`
<li class=" "  style="margin-top:20px">
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
        <div class="post-content flex flex-col items-center">
        <div class="content-style  w-full ">
        <h1 class="text-white text-center">${titleOfPosts}</h1>
        <h1 class="text-red-200 mb-10 text-center">${body}</h1>
        
        <img
                class=" justify-center m-auto items-center  h-40 w-80 pt-4"
                src="${postMedia}"
                alt="media"
              />
              <time datetime="2021-01-27T16:35" class="flex mr-10 text-gray-500 ">Updated ${postCreation} min ago
                        </time>
              </div>
        </div>
        </li>
        `
)}

}



}
getById();

