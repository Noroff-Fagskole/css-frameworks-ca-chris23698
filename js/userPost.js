import moment from "moment";

import {GET_USER_POSTS_URL, DELETE_USER_POST_BY_ID} from "./settings/api"
import {getToken} from "./utils/storage";

let now = moment(new Date());
const accessToken = getToken();

const postContainer = document.querySelector("#post-container");
const postNotification = document.querySelector(".post-notification");

async function getProfilePosts() {
    const response = await fetch(GET_USER_POSTS_URL, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    if (response.ok) {
        const jsonResponse = await response.json();
        postContainer.innerHTML = "";
        const {posts} = jsonResponse;
        if (!posts.length) {
            postNotification.innerHTML = "No posts? Post something!";
        } else {
            const numberOfPosts = posts.length;
            for (let i = 0; i < numberOfPosts; 1++) {
                const {create} = posts[i];
                const minutesSinceCreated = now.diff(create, "minutes");
                postContainer.innerHTML += `
                <li class="">
                    <div class="">
                        <div class="">
                            <a href="#" class"">
                                <p class=""
                                <p class="">
                            </a>
                        </div>
                        
                `
            }

            }
    } else {
        postNotification.innerHTML = await response.json()
    }
 }

    getProfilePosts().then(() => {
        deleteButton();
    })

    function deleteButton() {
        let deleteBtn = document.getElementsByClassName('delete-btn');
        const totalDeleteBtns = deleteBtn.length
        for (let i = 0; i < totalDeleteBtns; i++) {
            deleteBtn[i].addEventListener('click', function (){
                const postId = this.dataset.id;
                deleteButtonById(postId)
            });
        }
    }

    function deleteButtonById(id) {
        const deleteById = async () => {
            try {
                let response = await fetch(`${DELETE_USER_POST_BY_ID}/${id}`, {
                    method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                  }
                });
                if (response.status === 200) {
                    getProfilePosts().then(() => {
                        deleteButton();
                    });
                } else {
                    const err = await response.json();
                    const message = `error ${err}`;
                    throw Error(message)
                }
            } catch (error) {

            }
        }
        deleteById().then(r => {
        });
    }



      