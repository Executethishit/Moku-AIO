# MOKU AIO Script

## Description

MOKU AIO is a userscript designed to automate specific actions on a web page, such as filling in tweet URLs, clicking various buttons, and handling interactions for quests. No more unnecessary clicks or popups!

## Installation

1. Install a userscript manager extension like [Tampermonkey](https://www.tampermonkey.net/) for your browser.
2. Click on the Tampermonkey icon and select "Create a new script".
3. Copy the contents of the `MOKU AIO-0.15.8.user.js` file into the new script.
4. Save the script.

## Usage

The script automates the following actions:

- Fills in a tweet URL based on the user's username.
- Clicks on buttons labeled "Back to Quests" and "Claim".
- Handles interactions to navigate to "Head to X Browser" and returns back after a delay.

## Script Details

```javascript
// ==UserScript==
// @name         MOKU AOI
// @namespace    http://tampermonkey.net/
// @version      0.15.8
// @description  try to take over the world! No more unnecessary clicks or popups!
// @author       Trojan10
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=moku.gg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to fill the tweet URL input
    function fillTweetURLInput() {
        const tweetURLInput = document.querySelector('input[placeholder="Enter your tweet URL here"]');
        console.log('Tweet URL input:', tweetURLInput);
        const usernameElement = document.querySelector('span.chakra-text.css-sb2h4l');
        console.log('Username element:', usernameElement);
        if (tweetURLInput && usernameElement) {
            const username = usernameElement.textContent.trim();
            const tweetURL = `https://x.com/${username}/status/1785890701680799810`;
            tweetURLInput.value = tweetURL;
            console.log('Filled tweet URL input with:', tweetURLInput.value);
        }
    }

    // Function to click on the "Back to Quests" button
    function clickBackToQuestsButton() {
        const backButton1 = document.querySelector('button.chakra-button.css-lb13n9');
        const backButton2 = document.querySelector('button.chakra-button.css-y9uut2');
        const backButton3 = document.querySelector('button.chakra-button.css-1fz9kzx');
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
        const claimButton = document.querySelector('button.chakra-button.css-1cu4onf');
        if (claimButton && claimButton.textContent.trim() === "Claim") {
            console.log('Clicking on "Claim" button...');
            claimButton.click();
        }
    }

    // Function to click on the "Head to X Browser" button
    function headToXQuest() {
        const headToXButton = document.querySelector('button.chakra-button.css-t8acr6');
        if (headToXButton && headToXButton.textContent.trim() === "Head to X Browser") {
            console.log('Clicking on "Head to X Browser" button...');
            headToXButton.click();
            setTimeout(() => {
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
