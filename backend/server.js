const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.get("/resume", (_, res) => {
    const filePath = path.join(__dirname, 'documents/resume_aug_2024.pdf');
    res.sendFile(filePath);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
