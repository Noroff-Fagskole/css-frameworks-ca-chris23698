import { data } from "autoprefixer";
import { getToken, getUserName  } from "./utils/storage";

const accessToken = {getToken}
const userName = {getUserName}
let areFollowing = [];
async function fetchYourProfile() {
    try {
        const GET_PROFILE_URL = `${Base_URL}https://nf-api.onrender.com//api/v1/social/profiles/${userName}?_posts=true&_following=true&_followers=true`
        const getData = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
         },
        };
        const response = await fetch(GET_PROFILE_URL, getData);
        const data = await response.json();

        areFollowing = data.following.map(({userName}) => {
            return userName;
        });

    }
    catch(err) {

    }
}
fetchYourProfile();

if (alreadyFollow.includes(data.userName)) {
    followButton.innerHTML = "unfollow";
}