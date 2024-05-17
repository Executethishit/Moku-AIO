// ==UserScript==
// @name         MOKU AOI
// @namespace    http://tampermonkey.net/
// @version      0.15.8
// @description  try to take over the world!
// @author       Trojan10
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=moku.gg
// @grant        none
// ==/UserScript==






(function() {
    'use strict';

    // Function to fill the tweet URL input
    function fillTweetURLInput() {
        // Find the tweet URL input with placeholder "Enter your tweet URL here"
        const tweetURLInput = document.querySelector('input[placeholder="Enter your tweet URL here"]');
        console.log('Tweet URL input:', tweetURLInput);

        // Find the username element
        const usernameElement = document.querySelector('span.chakra-text.css-sb2h4l');
        console.log('Username element:', usernameElement);

        // If the tweet URL input and username element are found
        if (tweetURLInput && usernameElement) {
            // Get the username
            const username = usernameElement.textContent.trim();

            // Generate the tweet URL
            const tweetURL = `https://x.com/${username}/status/1785890701680799810`;

            // Fill the tweet URL input
            tweetURLInput.value = tweetURL;
            console.log('Filled tweet URL input with:', tweetURLInput.value);
        }
    }

    // Function to click on the "Back to Quests" button
    function clickBackToQuestsButton() {
        // Find the buttons with the specified classes
        const backButton1 = document.querySelector('button.chakra-button.css-lb13n9');
        const backButton2 = document.querySelector('button.chakra-button.css-y9uut2');
        const backButton3 = document.querySelector('button.chakra-button.css-1fz9kzx');

        // Check if any of the buttons exist and if their inner text is "Back to Quests", then click on it
        if (backButton1 && backButton1.textContent.trim() === "Back to Quests") {
            console.log('Clicking on "Back to Quests" button...');
            backButton1.click();
        } else if (backButton2 && backButton2.textContent.trim() === "Back to Quests") {
            console.log('Clicking on "Back to Quests" button...');
            backButton2.click();
        } else if (backButton3 && backButton3.textContent.trim() === "Back to Quests") {
            console.log('Clicking on "Back to Quests" button...');
            backButton3.click();
        }
    }



    // Function to click on the "Claim" button
    function clickClaimButton() {
        // Find the button with the text "Claim"
        const claimButton = document.querySelector('button.chakra-button.css-1cu4onf');

        // If the button exists and its inner text is "Claim", click on it
        if (claimButton && claimButton.textContent.trim() === "Claim") {
            console.log('Clicking on "Claim" button...');
            claimButton.click();
        }
    }

    // Function to click on the "Head to X Browser" button
    function headToXQuest() {
        // Find the button with the text "Head to X Browser"
        const headToXButton = document.querySelector('button.chakra-button.css-t8acr6');

        // If the button exists and its inner text is "Head to X Browser", click on it
        if (headToXButton && headToXButton.textContent.trim() === "Head to X Browser") {
            console.log('Clicking on "Head to X Browser" button...');

            // Simulate click
            headToXButton.click();

            // Wait for 2 seconds
            setTimeout(() => {
                // Click on "Back to Quests" button after 2 seconds
                clickBackToQuestsButton();
            }, 2000);
        }
    }



    // Run the functions initially
    fillTweetURLInput();
    clickBackToQuestsButton();
    clickClaimButton();
    headToXQuest();

    // Check for the buttons every 2 seconds and click on them if they appear
    setInterval(() => {
        fillTweetURLInput();
        clickBackToQuestsButton();
        clickClaimButton();
        headToXQuest();
    }, 200);
})();
