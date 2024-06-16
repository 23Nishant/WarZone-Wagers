// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    const connectWalletBtn = document.querySelector(".connect-wallet-btn");
    const profileBtn = document.querySelector(".profile-btn");
    const duelBtn = document.querySelector(".duel-btn");
    const multiplayerBtn = document.querySelector(".multiplayer-btn");

    connectWalletBtn.addEventListener("click", function() {
        // Connect wallet logic goes here
        console.log("Connect wallet button clicked!");
    });

    profileBtn.addEventListener("click", function() {
        // Profile logic goes here
        console.log("Profile button clicked!");
    });

    duelBtn.addEventListener("click", function() {
        // Duel game logic goes here
        console.log("Duel game button clicked!");
    });

    multiplayerBtn.addEventListener("click", function() {
        // Multiplayer game logic goes here
        console.log("Multiplayer game button clicked!");
    });
});