import moment from "moment";
import { GET_USER_POSTS_URL } from "./settings/api"
import { getToken, getUserName  } from "./utils/storage";

const userName = getUserName();

let now = moment(new Date());
const accessToken = getToken();

const postsContainer = document.querySelector("#posts-container");
const postsNotificationMessage = document.querySelector(".posts__notification");
const name = document.querySelector(".name");

name.innerHTML = `${userName}`;

async function getProfilePosts() {
    const response = await fetch(GET_USER_POSTS_URL, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    if (response.ok) {
        const jsonResponse = await response.json();
        postsContainer.innerHTML = "";
        const { posts } = jsonResponse;
        if (!posts.length) {
            postsNotificationMessage.innerHTML = "you don't have any posts, whats on your mind today?";
        } else {
            const numberOfPosts = posts.length;
            for (let i = 0; i < numberOfPosts; i++) {
                const { created } = posts[i];
                const minutesSinceCreated = now.diff(created, "minutes");
                postsContainer.innerHTML += `
            <li class="" style="margin-top:20px">
                <div class="post mb-10">
                    <div class="peronsal-info flex text-center items-center">
                        <div class="profile-picture p-2">
                            <img class="rounded-full w-10 h-10"
                                 src="${userName}"
                                 alt="" />
                        </div>
                            <div class="name">
                                <span class="text-lg text-white text-bold">${userName}</span>
                            </div>
                    </div>
                        <div class="post-content border-white rounded flex flex-col items-center">
                            <div class="content-style w-full ">
                                <h1 class="text-white  text-center">${posts[i].title}</h1>
                                    <p class="text-main-text mb-10  text-center">${posts[i].body}</p>
                                        <time datetime="2021-01-27T16:35" class="flex mr-10 text-gray-500 ">Updated ${minutesSinceCreated} min ago </time>
                            </div>
                        </div>
                    </div>
            </li>`
            }
        }
    } else {
        postsNotificationMessage.innerHTML = await response.json()
    }
}

getProfilePosts()
