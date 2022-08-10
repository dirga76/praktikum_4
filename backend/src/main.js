import express from "express";
const app = express();
const port = 7000;

app.get("/", (req, res) => {
    res.send("aldo Halo");
});

app.get("/makanan", (req, res) => {
    res.send([{
            id: 1,
            nama: "Mies Sedap",
            rasa: "Ayam",
        },
        {
            id: 2,
            nama: "Ayam Bakar",
            rasa: "Nasi Goreng",
        },
        {
            id: 3,
            nama: "Kueh tape",
            rasa: "Nasi Goreng",
        },
    ]);
});

app.get("/minuman", (req, res) => {
    res.send([{
            id: 1,
            nama: "Bintang Zoro",
            rasa: "Jeruk Nipis",
        },

        {
            id: 2,
            nama: "Ice lemon",
            rasa: "lemon Tea",
        },
        {
            id: 3,
            nama: "thai tea",
            rasa: "lemon Tea",
        },
    ]);
});

app.post("/ create", (req, res) => {
    res.send(req.res);
});

app.listen(port, () => {
    console.log(`jalankan portnya ${port}`);
});