const downloadResumeButton = document.getElementById("resume_button");
let text = document.getElementById('resume_text');

downloadResumeButton.addEventListener("click", downloadResume);

async function downloadResume() {
    try {
        const response = await fetch("/resume");
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        window.location.href = "/resume";
        
    } catch(error) {
        console.error(error);
        // Display something so user knows something went wrong.
    }
}
