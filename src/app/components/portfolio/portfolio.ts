import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, User, Palette, Share2, FileText, Target, Briefcase, Mail, Instagram, Facebook, Linkedin, MessageCircle, Award, Users as UsersIcon, TrendingUp, Layers } from 'lucide-angular';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class Portfolio {
  readonly User = User;
  readonly Palette = Palette;
  readonly Share2 = Share2;
  readonly FileText = FileText;
  readonly Target = Target;
  readonly Briefcase = Briefcase;
  readonly Mail = Mail;
  readonly Instagram = Instagram;
  readonly Facebook = Facebook;
  readonly Linkedin = Linkedin;
  readonly MessageCircle = MessageCircle;
  readonly Award = Award;
  readonly UsersIcon = UsersIcon;
  readonly TrendingUp = TrendingUp;
  readonly Layers = Layers;

  services = [
    { title: 'Logo & Brand Identity Design', icon: this.Palette },
    { title: 'Social Media Post Design', icon: this.Share2 },
    { title: 'Posters, Flyers & Pamphlets', icon: this.FileText },
    { title: 'Business Branding', icon: this.Target },
    { title: 'Ad Creatives', icon: this.TrendingUp },
    { title: 'Custom Templates & Layouts', icon: this.Layers }
  ];

  stats = [
    { icon: this.Award, number: '4+', label: 'Years Experience' },
    { icon: this.UsersIcon, number: '50+', label: 'Projects Completed' },
    { icon: this.TrendingUp, number: '30+', label: 'Happy Clients' },
    { icon: this.Briefcase, number: '12+', label: 'Major Partners' }
  ];

  

  constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}