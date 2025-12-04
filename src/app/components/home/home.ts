import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Sparkles, ChevronRight, Award, Clock, Users } from 'lucide-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, LucideAngularModule ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  readonly Sparkles = Sparkles;
  readonly ChevronRight = ChevronRight;
  readonly Award = Award;
  readonly Clock = Clock;
  readonly Users = Users;

  

  features = [
  {
    icon: this.Award,
    title: 'Professional Quality',
    description: 'Clean and professional work that builds trust and leaves a lasting impact on your audience',
    stat: '100% Quality Assured'
  },
  {
    icon: this.Clock,
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising quality, keeping your projects on schedule',
    stat: 'Average 2-3 Days Delivery'
  },
  {
    icon: this.Users,
    title: 'Clear Communication',
    description: 'Your satisfaction and brand growth are our priority with transparent collaboration',
    stat: '24/7 Support Available'
  }
];
  constructor(private router: Router) {}

  navigateToPortfolio() {
    this.router.navigate(['/portfolio']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
