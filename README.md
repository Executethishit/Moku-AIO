# MOKU AIO Script. Join [Discord](https://www.discord.gg/ukx23R9bqC)

## Description

MOKU AIO is a userscript designed to automate specific actions on [Moku](https://hq.moku.gg/), such as filling in tweet URLs, clicking various buttons, and handling interactions for quests. No more unnecessary clicks or popups!

## Installation

1. Install a userscript manager extension like [Tampermonkey](https://www.tampermonkey.net/) for your browser.
2. Click on the Tampermonkey icon and select "Create a new script".
3. Copy the contents of the `MOKU AIO.js` file into the new script.
4. Save the script.

## Usage

The script automates the following actions:

- Fills in a tweet URL based on the user's username.
- Clicks on buttons labeled "Back to Quests" and "Claim".
- Handles interactions to navigate to "Head to X Browser" and returns back after a delay.
- Automate Quest Completion: Use the Autotask function to automatically fill answers and click through quests on the MOKU AOI website, saving time and effort.
- Effortless Quest Completion: Automate answers and quest navigation for seamless gameplay.
- Instant Reward Claiming: Automatically claim rewards with a single click for uninterrupted progress.
- Smooth Navigation: Simplify menu traversal and quest progression for a smoother gaming experience.
- Stay Updated: Subscribe to game channels and platforms automatically to stay informed.
- Customizable Automation: Tailor automation to your preferences for personalized gameplay.

## Script Details

```javascript
// ==UserScript==
// @name         MOKU AOI
// @namespace    http://tampermonkey.net/
// @version      0.15.9
// @description  try to take over the world!
// @author       Trojan10
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=moku.gg
// @grant        none
// ==/UserScript==






(function() {
    'use strict';

    const taskAnswers = {
            "Ragmon's AMA on Discord": "Ragmon's AMA on Discord ",
            "Find Ragmon": "10 ",
            "Learning Spells I": "Triple Bash ",
            "Learning Spells II": "Frost Diver ",
            "Learning Spells III": "Charge Arrow ",
            "View and Like Ragnarok: Monster World's Trailer": "25 ",
            "Dive Deeper Into Ragmon's Whitepaper": "Capped Cycle Currency ",
            "Dive Deeper Into Ragmon's Whitepaper II": "2 ",
            "Ragmon Lore I": "Novice ",
            "Ragmon Lore II": "lightening bolt ",
            "Ragmon Lore III": "magician ",
            "Ragmon Love IV": "brandish scythe ",
            "Ragmon Lore V": "cell division ",
            "Ragmon Lore VI": "Odin's sweat ",
            "Subscribe Ragnarok: Monster World Youtube channel": "1 ",
            "Follow Ragnarok: Monster World on Medium": "Introducing the Genesis Tamer ",
            "Follow Ragnarok: Monster World on Facebook": "Ragmon.gg ",
            "Introducing Pecopeco I": "Picky ",
            "Introducing Pecopeco II": "Knight "
            "Introducing Pecopeco III": "D "
        };

    // Function to fill the tweet URL input
    function fillTweetURLInput() {
        // Find the tweet URL input with placeholder "Enter your tweet URL here"
        const tweetURLInput = document.querySelector('input[placeholder="Enter your tweet URL here"]');

        // Find the username element
        const usernameElement = document.querySelector('span.chakra-text.css-sb2h4l');

        // If the tweet URL input and username element are found
        if (tweetURLInput && usernameElement) {
            // Get the username
            const username = usernameElement.textContent.trim();

            // Generate the tweet URL
            const tweetURL = `https://x.com/${username}/status/1785890701680799810`;

            // Fill the tweet URL input
            tweetURLInput.value = tweetURL;
            setTimeout(clickSubmitButton, 5000);
        }
    }

    // Function to click on the "Back to Quests" button
    function clickBackToQuestsButton() {
        // Find the buttons with the specified classes
        const backButton1 = document.querySelector('button.chakra-button.css-lb13n9');
        const backButton2 = document.querySelector('button.chakra-button.css-y9uut2');
        const backButton3 = document.querySelector('button.chakra-button.css-lo5yay');

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

//    function clickSubmitButton() {
        // Find the button with the text "Submit"
//        const SubmitButton = document.querySelector('button.chakra-button.css-lb13n9');

        // If the button exists and its inner text is "Submit", click on it
//        if (SubmitButton && SubmitButton.textContent.trim() === "Submit") {
//            console.log('Clicking on "Submit" button...');
//            SubmitButton.removeAttribute('disabled');
//            SubmitButton.click();
//        }
//    }



    function handleRagmonLoreTasks() {
        // Find all headings
        const headings = document.querySelectorAll('h2.chakra-heading.css-83vqzy');

        headings.forEach(heading => {
            const taskTitle = heading.textContent.trim();
            if (taskAnswers.hasOwnProperty(taskTitle)) {
                const answer = taskAnswers[taskTitle];
                const answerInput = heading.closest('.chakra-modal__body').querySelector('input[placeholder="ENTER ANSWER"]');

                if (answerInput) {
                    console.log(`Filling answer for ${taskTitle}: ${answer}`);
                    answerInput.value = answer;
                    setTimeout(clickSubmitButton, 4000);
                } else {
                    console.log('Input field not found');
                }
            }
        });
    }




    // Run the functions initially
    fillTweetURLInput();
    clickBackToQuestsButton();
    clickClaimButton();
    headToXQuest();
    handleRagmonLoreTasks();

    // Check for the buttons every 2 seconds and click on them if they appear
    setInterval(() => {
        fillTweetURLInput();
        clickBackToQuestsButton();
        clickClaimButton();
        headToXQuest();
        handleRagmonLoreTasks();
    }, 1000);
    console.log('Join Discord: https://discord.gg/mmW2RsrCWF');
})();
