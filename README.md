# 🎮Stone-Paper-Scissor-Game 

**📋 Description:**
Rock Paper Scissors is a hand game usually played between two people. Each player simultaneously forms one of three shapes with their hand:

**✊ Rock**

**✋ Paper**

**✌️ Scissors**

This Project automates one of the players (the computer) using randomization, while the other player (the user) inputs their choice. The game then determines the winner based on the standard rules.

**📖 Introduction:**
Also known as Roshambo, this game is a classic example of a zero-sum game. The three possible hand signs are:

**Rock:** a closed fist

**Paper:** a flat open hand

**Scissors:** a fist with the index and middle fingers extended (forming a V shape)

The game logic is:

Rock beats Scissors (rock crushes scissors)

Scissors beats Paper (scissors cuts paper)

Paper beats Rock (paper covers rock)

If both players choose the same item, it results in a tie, and the game is usually replayed.

You can read more about the game on Wikipedia.

**🕹 Game Play:**

![image](https://github.com/user-attachments/assets/d4ef0499-5347-4be0-907b-7d252a18c4ee)




| Player   | Computer | Result        |
| -------- | -------- | ------------- |
| Rock     | Paper    | Computer Wins |
| Paper    | Paper    | Tie           |
| Scissors | Paper    | Player Wins   |
| Rock     | Rock     | Tie           |
| Paper    | Rock     | Player Wins   |
| Scissors | Rock     | Computer Wins |
| Rock     | Scissors | Player Wins   |
| Paper    | Scissors | Computer Wins |
| Scissors | Scissors | Tie           |

Traditionally, players count aloud “Rock! Paper! Scissors!” and then reveal their choices simultaneously. In this computerized version:

The user chooses one of: Rock, Paper, or Scissors.

The computer randomly picks one of the three.

The program determines the result (Win, Lose, or Tie) and displays it.
