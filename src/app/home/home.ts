import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  currentInput: string = '';
  result: string = '';
  moodMessage: string = '';

  // Array of motivational messages
  private messages = [
    { threshold: 0, message: "Welcome! Even a potato can count, but you're doing it with style! 🥔😂" },
    { threshold: 1, message: "First calculation! You're officially smarter than a rock! 🪨🤣" },
    { threshold: 2, message: "Two in a row! Are you a calculator whisperer? 🤫😆" },
    { threshold: 3, message: "Three calculations! The Holy Trinity of Math! 🙏😂" },
    { threshold: 4, message: "Four down! You're on a roll like a hamster wheel! 🐹🤣" },
    { threshold: 5, message: "High five! Wait, that's five calculations! ✋😄" },
    { threshold: 6, message: "Six calculations! You're halfway to a dozen donuts! 🍩😂" },
    { threshold: 7, message: "Lucky seven! You're luckier than a cat with nine lives! 🐱🤣" },
    { threshold: 8, message: "Eight calculations! You're infinite if you turn sideways! ∞😆" },
    { threshold: 9, message: "Nine! You're one away from being perfect at being 10! 😅" },
    { threshold: 10, message: "TEN! You can now count on both hands! 🙌😂" },
    { threshold: 11, message: "Eleven! This one goes to 11! 🎸🤣" },
    { threshold: 12, message: "A dozen! You're as complete as an egg carton! 🥚😄" },
    { threshold: 13, message: "Unlucky 13? More like LUCKY you're still calculating! 🍀😂" },
    { threshold: 14, message: "Fourteen! Two weeks of being amazing! 📅🤣" },
    { threshold: 15, message: "Fifteen! You're a quarter of the way to 60 seconds! ⏰😆" },
    { threshold: 16, message: "Sweet sixteen calculations! Time to get a math license! 🚗😂" },
    { threshold: 17, message: "Seventeen! Dancing Queen, young and sweet, calculating machine! 💃🤣" },
    { threshold: 18, message: "Eighteen! Legally an adult calculator user! 🎓😄" },
    { threshold: 19, message: "Nineteen! So close to 20 you can taste the round numbers! 👅😂" },
    { threshold: 20, message: "TWENTY! You have more calculations than toes! 🦶🤣" },
    { threshold: 21, message: "Twenty-one! You can legally gamble with numbers now! 🎰😆" },
    { threshold: 22, message: "Twenty-two! Two ducks in a row! Quack quack! 🦆🦆😂" },
    { threshold: 23, message: "Twenty-three! Michael Jordan's number! Are you dunking on math? 🏀🤣" },
    { threshold: 24, message: "Twenty-four! Hours in a day, but you're timeless! ⌚😄" },
    { threshold: 25, message: "Quarter century! Wait, that's years... SILVER MEDAL! 🥈😂" },
    { threshold: 30, message: "Thirty! You're flirty and thriving with math! 💅🤣" },
    { threshold: 33, message: "Thirty-three! Half of 66, twice as cool as 16.5! 😎😆" },
    { threshold: 35, message: "Thirty-five! You're 5 away from 40 and 35 away from 0! 🤯😂" },
    { threshold: 40, message: "FORTY! Life begins at 40... calculations! 🎉🤣" },
    { threshold: 42, message: "Forty-two! The answer to life, universe, and everything! 🌌😄" },
    { threshold: 45, message: "Forty-five! You're spinning faster than a vinyl record! 💿😂" },
    { threshold: 50, message: "FIFTY! Half a century! You're basically a math fossil now! 🦴🤣" },
    { threshold: 55, message: "Fifty-five! Two fives high-fiving each other! ✋✋😆" },
    { threshold: 60, message: "Sixty seconds! You've been doing this for... wait, 60 calculations! ⏱️😂" },
    { threshold: 69, message: "Nice. 😏😂" },
    { threshold: 70, message: "Seventy! You're hotter than a fever! 🌡️🤣" },
    { threshold: 75, message: "Seventy-five! Three quarters there! Where? Nobody knows! 🗺️😄" },
    { threshold: 77, message: "Lucky sevens! You hit the jackpot of math! 🎰💰😂" },
    { threshold: 80, message: "Eighty! You're totally rad like the 80s! 🕺🤣" },
    { threshold: 88, message: "Eighty-eight! Two infinity symbols stacked! ∞∞😆" },
    { threshold: 90, message: "Ninety! You're one right angle away from being perfect! 📐😂" },
    { threshold: 99, message: "Ninety-nine! So close to 100 you're basically there already! 🏃🤣" },
    { threshold: 100, message: "ONE HUNDRED! 💯 You're more perfect than a circle! ⭕😄" },
    { threshold: 111, message: "One-eleven! Three ones! Like a minimalist's dream! 1️⃣1️⃣1️⃣😂" },
    { threshold: 123, message: "One-two-three! Easy as ABC! 🎵🤣" },
    { threshold: 150, message: "One-fifty! You're 1.5x better than 100! 🚀😆" },
    { threshold: 200, message: "TWO HUNDRED! You're twice as good as being good! 🎊😂" },
    { threshold: 250, message: "Two-fifty! Quarter of a thousand! You're 0.025% to 1 million! 📈🤣" },
    { threshold: 300, message: "THREE HUNDRED! This. Is. CALCULATOR! 🗡️😄" },
    { threshold: 365, message: "Three-sixty-five! A whole year of calculations in one sitting! 🎆😂" },
    { threshold: 404, message: "Four-oh-four! Error: Your limits NOT FOUND! 🔍❌🤣" }
  ];

  append(value: string) {
    this.currentInput += value;
    this.moodMessage = '';  // Clear message when new input is added
  }

  clear() {
    this.currentInput = '';
    this.result = '';
    this.moodMessage = '';
  }

  delete() {
    this.currentInput = this.currentInput.slice(0, -1);
    this.moodMessage = '';
  }

  private getMoodMessage(result: number): string {
    // Find the appropriate message based on the result
    const messageObj = [...this.messages]
      .reverse()
      .find(m => result >= m.threshold);
    return messageObj ? messageObj.message : "That's the spirit! Keep calculating! ⭐";
  }

  calculate() {
    try {
      const calculatedResult = eval(this.currentInput);
      this.result = calculatedResult.toString();
      
      // Get mood message based on the absolute value of the result
      this.moodMessage = this.getMoodMessage(Math.abs(calculatedResult));
      
      // Add special messages for specific calculations
      if (this.currentInput.includes('+')) {
        this.moodMessage += " Adding to your brilliance! ✨";
      } else if (this.currentInput.includes('-')) {
        this.moodMessage += " Subtraction satisfaction! 📊";
      } else if (this.currentInput.includes('*')) {
        this.moodMessage += " Multiplication magic! 🎯";
      } else if (this.currentInput.includes('/')) {
        this.moodMessage += " Division precision! 🎪";
      }
    } catch {
      this.result = 'Error';
      this.moodMessage = "Oops! Even geniuses make mistakes! 🤓 Let's try again!";
    }
  }
}
