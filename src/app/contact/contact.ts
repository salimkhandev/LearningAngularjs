import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  loading = false;
  errorMessage = '';

  // Social media links
  socialLinks = [
    { icon: 'fab fa-twitter', url: 'https://twitter.com/moodcalc' },
    { icon: 'fab fa-facebook', url: 'https://facebook.com/moodcalc' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/company/moodcalc' },
    { icon: 'fab fa-github', url: 'https://github.com/moodcalc' }
  ];

  // FAQ items
  faqItems = [
    {
      question: 'How does the Mood Calculator work?',
      answer: 'Our calculator combines regular calculations with fun, motivational messages to make math more enjoyable! 🎯'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Coming soon! We\'re working on mobile apps for both iOS and Android. Stay tuned! 📱'
    },
    {
      question: 'Can I customize the messages?',
      answer: 'Not yet, but we\'re planning to add custom message support in a future update! ✨'
    }
  ];

  // Office locations
  locations = [
    {
      city: 'New York',
      address: '123 Broadway, NY 10013',
      phone: '+1 (555) 123-4567'
    },
    {
      city: 'London',
      address: '456 Oxford St, UK SW1P 2PG',
      phone: '+44 20 7123 4567'
    }
  ];

  // Validation methods
  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  isFormValid(): boolean {
    return (
      this.formData.name.length >= 2 &&
      this.validateEmail(this.formData.email) &&
      this.formData.subject.length >= 3 &&
      this.formData.message.length >= 10
    );
  }

  async onSubmit() {
    if (!this.isFormValid()) {
      this.errorMessage = 'Please fill in all fields correctly! 🎯';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.submitted = true;
      this.loading = false;
      
      // Clear form
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Show success message
      setTimeout(() => {
        this.submitted = false;
      }, 5000);

    } catch (error) {
      this.loading = false;
      this.errorMessage = 'Oops! Something went wrong. Please try again! 🔄';
    }
  }

  // Method to copy email to clipboard
  copyEmail(email: string) {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard! 📋');
  }
}
