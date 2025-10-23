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
