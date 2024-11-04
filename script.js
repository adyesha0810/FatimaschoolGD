// Display a welcome message when the page loads
window.onload = function() {
    alert("Welcome to Our School Website!");
};

// Function to show additional information
function showMoreInfo() {
    const infoParagraph = document.getElementById("more-info");
    if (infoParagraph.style.display === "none") {
        infoParagraph.style.display = "block";
    } else {
        infoParagraph.style.display = "none";
    }
}
