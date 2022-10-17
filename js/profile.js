import moment from "moment";
import {GET_USER_POSTS_URL, DELETE_USER_POST_BY_ID} from "./settings/api"
import {getToken} from "./utils/storage";
import {getUserName} from "./utils/storage";
const userName = getUserName()

const accessToken = getToken();

const postsContainer = document.querySelector("#posts-container");
const postsNotificationMessage = document.querySelector(".posts__notification");

async function getUserPosts() {
    const response = await fetch(`https://nf-api.onrender.com//api/v1/social/profiles/${userName}?_posts=true&_following=true&_followers=true`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    if (response.ok) {
        const postByIdData = await response.json();
        const whenPostUpdated = postByIdData.updated;
        let time = moment(new Date());
        postsContainer.innerHTML = "";
        const {posts} = postByIdData;
        if (!posts.length) {
            postsNotificationMessage.innerHTML = "Sorry you don't have posts currently";
        } else {
            const numberOfPosts = posts.length;
            for (let i = 0; i < numberOfPosts; i++) {
                const {whenPostUpdated} = posts[i];
                console.log(posts[i])
                const postCreation = time.diff(whenPostUpdated, 'minutes');
                postsContainer.innerHTML += `
                 <li class="" style="margin-top:20px">
                    <div class="post mb-10">
                        <div class="peronsal-info flex text-center items-center">
                            <div class="profile-picture p-2">
                                <img class="rounded-full w-10 h-10"
                                src="./img/nerds-L.png"
                                alt=""/>
                            </div>
                            <div class="name">
                            <span class="text-lg text-white text-bold">${userName}</span>
                        </div>
                    </div>
        <div class="post-content border-white rounded flex flex-col items-center">
        <div class="content-style w-full ">
        <h1 class="text-white  text-center">${posts[i].title}</h1>
        <p class="text-red-200 mb-10  text-center">${posts[i].body}</p>
        <time datetime="2021-01-27T16:35" class="flex mr-10 text-gray-500 ">Updated ${postCreation} min ago
                        </time>
        </div>
        </div>
        </div>
        </li>
        <div class="comments flex flex-col ">
        </div>
        `
            }
        }
    } else {
        postsNotificationMessage.innerHTML = await response.json()
    }
}

getUserPosts().then(() => {
    handleDeleteBtnsEvents();
})

function handleDeleteBtnsEvents() {
    let deleteButtons = document.getElementsByClassName('delete-post-btn');
    console.log("deleteButtons: ", deleteButtons);
    // assign an event handler for each button
    const totalNumberOfDeleteBtns = deleteButtons.length
    for (let i = 0; i < totalNumberOfDeleteBtns; i++) {
        console.log("the index of each delete BTN", i)
        deleteButtons[i].addEventListener('click', function () {
            const postId = this.dataset.id;
            handleDeletePostById(postId);
        });
    }
}

function handleDeletePostById(id) {
    const deleteUserById = async () => {
        try {
            let response = await fetch(`${DELETE_USER_POST_BY_ID}/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            });
            if (response.status === 200) {
                console.log("delete post success ⭕ ⭕ ⭕ !! ");
                getUserPosts().then(() => {
                    handleDeleteBtnsEvents();
                });

            } else {
                const err = await response.json();
                const message = `Sorry some error ${err}`;
                //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error
                throw Error(message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    deleteUserById().then(r => {
    });
}
