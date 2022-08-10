const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const url = "https://randomuser.me/api/";
        const profilUser = ref("");
        const nameUser = ref("");
        const pictureUser = ref("");

        const generateUser = async() => {
            const reUser = await axios.get(url);
            nameUser.value = reUser.data.results[0].name.first;
            pictureUser.value = reUser.data.results[0].picture.large;
        };
        return {
            generateUser,
            pictureUser,
            nameUser,
        };
    },
});

app.mount("#app");