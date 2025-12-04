import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, Palette, Share2, FileText, Target, CheckCircle, Clock, Users, Award, ChevronRight, Zap, Heart, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  readonly Palette = Palette;
  readonly Share2 = Share2;
  readonly FileText = FileText;
  readonly Target = Target;
  readonly CheckCircle = CheckCircle;
  readonly Clock = Clock;
  readonly Users = Users;
  readonly Award = Award;
  readonly ChevronRight = ChevronRight;
  readonly Zap = Zap;
  readonly Heart = Heart;
  readonly TrendingUp = TrendingUp;

  services = [
    {
      title: 'Logo & Brand Identity',
      description: 'Create memorable logos and complete brand identities that represent your business values and resonate with your target audience',
      icon: this.Palette,
      features: [
        'Custom logo design',
        'Brand style guide',
        'Color palette selection',
        'Typography system',
        'Multiple format files'
      ],
    },
    {
      title: 'Social Media Graphics',
      description: 'Engaging posts, stories, and templates designed to boost your social media presence and drive audience engagement',
      icon: this.Share2,
      features: [
        'Custom post designs',
        'Story templates',
        'Carousel designs',
        'Cover images',
        'Highlight icons'
      ],
    },
    {
      title: 'Print Materials',
      description: 'High-quality posters, flyers, brochures, and business cards designed for maximum professional impact',
      icon: this.FileText,
      features: [
        'Business cards',
        'Flyers & brochures',
        'Posters & banners',
        'Print-ready files',
        'Premium quality'
      ],
    },
    {
      title: 'Advertising & Marketing',
      description: 'Eye-catching promotional graphics, banners, and ad designs that drive conversions and boost engagement',
      icon: this.Target,
      features: [
        'Digital ad banners',
        'Web banners',
        'Email headers',
        'Promotional graphics',
        'Multiple sizes'
      ],
    }
  ];

  processSteps = [
    {
      title: 'Discovery & Research',
      description: 'We start by understanding your brand, goals, target audience, and competitive landscape'
    },
    {
      title: 'Concept Development',
      description: 'Multiple creative concepts are developed based on insights gathered during discovery'
    },
    {
      title: 'Design & Refinement',
      description: 'Selected concepts are refined with your feedback until we achieve perfection'
    },
    {
      title: 'Delivery & Support',
      description: 'Final files delivered in all required formats with ongoing support as needed'
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