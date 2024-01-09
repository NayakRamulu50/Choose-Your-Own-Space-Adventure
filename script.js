const storyTextElement = document.getElementById('story-text');
const choiceContainerElement = document.getElementById('choice-container');

function displayStoryBit(storyBit) {
    const text = storyBit.text;
    const choices = storyBit.choices;

    storyTextElement.innerText = text;
    choiceContainerElement.innerHTML = ''; // Clear previous choices

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('choice-button');
        button.onclick = function() {
            if (choice.next) {
                displayStoryBit(choice.next);
            } else {
                // End of the story branch
                storyTextElement.innerText = "The end.";
                choiceContainerElement.innerHTML = '';
            }
        };
        choiceContainerElement.appendChild(button);
    });
}

const story = {
    text: "You wake up on the command deck of the S.S. Odyssey. What do you do?",
    choices: [
      {
        text: "Look out the window.",
        next: {
          text: "You see a vast expanse of stars and a mysterious blue planet in the distance. Do you?",
          choices: [
            {
              text: "Set a course for the planet.",
              next: {
                text: "As you approach, the planet's gravitational field pulls you in. You brace for a rough landing.",
                choices: [
                  {
                    text: "Prepare for emergency landing.",
                    next: {
                      text: "Your skilled maneuvering allows you to land safely. You step out to explore this new world.",
                      choices: [
                        // Further nested choices for exploring the planet
                      ]
                    }
                  },
                  {
                    text: "Try to reverse the engines and escape.",
                    next: {
                      text: "It's too late, and the ship crashes into the planet. You blackout.",
                      // This could lead to an ending or a continuation of the story
                    }
                  }
                ]
              }
            },
            {
              text: "Continue on your preset course.",
              next: {
                text: "As you move away from the blue planet, you receive a distress signal. Do you?",
                choices: [
                  {
                    text: "Investigate the signal.",
                    next: {
                      text: "You follow the signal to a damaged ship hiding in an asteroid field.",
                      choices: [
                        // Further nested choices for the asteroid field encounter
                      ]
                    }
                  },
                  {
                    text: "Ignore the signal and move on.",
                    next: {
                      text: "You feel a pang of guilt but remind yourself of the mission's importance.",
                      // Another decision point or an ending could follow
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        text: "Check the ship's logs.",
        next: {
          text: "The logs show that you've been in hyper-sleep for 300 years. As you process this information, an alarm sounds. Do you?",
          choices: [
            {
              text: "Investigate the alarm.",
              next: {
                text: "You find that the life support system is failing. You need to act fast.",
                choices: [
                  {
                    text: "Attempt to repair the life support system.",
                    next: {
                      text: "You manage to patch the system temporarily. But you know you need to find a space dock soon.",
                      // Further choices for finding a space dock
                    }
                  },
                  {
                    text: "Put on a space suit and hope for the best.",
                    next: {
                      text: "The space suit will keep you alive, but it restricts your mobility and access to ship controls.",
                      // Further choices for dealing with the restricted access
                    }
                  }
                ]
              }
            },
            {
              text: "Ignore the alarm and check the navigation system.",
              next: {
                text: "The navigation system shows you're on a collision course with a comet. Do you?",
                choices: [
                  {
                    text: "Try to alter the ship's course.",
                    next: {
                      text: "With quick thinking, you avert a disaster and narrowly miss the comet.",
                      // Further choices following the near-miss
                    }
                  },
                  {
                    text: "Prepare for impact.",
                    next: {
                      text: "The ship is severely damaged by the comet's debris. Systems are failing.",
                      // Possible ending or a survival scenario
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  };
  

// Start the story
displayStoryBit(story);


