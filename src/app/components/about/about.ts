import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, Sparkles, Palette, Share2, FileText, Target, Award, Users, TrendingUp, Briefcase, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  readonly Sparkles = Sparkles;
  readonly Palette = Palette;
  readonly Share2 = Share2;
  readonly FileText = FileText;
  readonly Target = Target;
  readonly Award = Award;
  readonly Users = Users;
  readonly TrendingUp = TrendingUp;
  readonly Briefcase = Briefcase;
  readonly ChevronRight = ChevronRight;

  services = [
    { title: 'Social Media Ads', icon: this.Share2 },
    { title: 'Brand Identity', icon: this.Palette },
    { title: 'Posters & Print', icon: this.FileText },
    { title: 'Custom Templates', icon: this.Target }
  ];

  values = [
    {
      icon: this.Award,
      title: 'Quality',
      description: 'Every design meets the highest standards of excellence'
    },
    {
      icon: this.Sparkles,
      title: 'Creativity',
      description: 'Innovative solutions that make your brand memorable'
    },
    {
      icon: this.TrendingUp,
      title: 'Results',
      description: 'Designs that drive engagement and growth'
    }
  ];

  

  constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  navigateToPortfolio() {
    this.router.navigate(['/portfolio']);
  }
}