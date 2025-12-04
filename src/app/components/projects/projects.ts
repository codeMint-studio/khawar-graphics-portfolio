import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-angular';

interface Project {
  title: string;
  category: string;
  description: string;
  images: string[];
  currentIndex: number;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly ArrowRight = ArrowRight;
    readonly Sparkles = Sparkles;


  projects: Project[] = [
    {
      title: 'Brand & Identity Design',
      category: 'Logo Design',
      description: 'Complete brand identity for educational institution',
      images: [
        'assets/images/B&I-3.jpg',
        'assets/images/B&I-2.jpg',
        'assets/images/B&I-1.jpg'
      ],
      currentIndex: 0
    },
    {
      title: 'Custom Banners & Flyers',
      category: 'Banner & Flyers',
      description: 'Engaging social media templates and posts',
      images: [
        'assets/images/B&F-1.jpg',
        'assets/images/B&F-2.jpg',
        'assets/images/B&F-3.jpg',
        'assets/images/B&F-4.jpg',
      ],
      currentIndex: 0
    },
    {
      title: 'Product Packaging Design',
      category: 'Packaging Design',
      description: 'Complete event visual identity and materials',
      images: [
        'assets/images/PD-1.jpg',
        'assets/images/PD-2.jpg',
      ],
      currentIndex: 0
    },
    {
      title: 'Cards and Invoice Books Design',
      category: 'Cards & Invoice Books',
      description: 'Professional brochures and flyers',
      images: [
        'assets/images/C&IB-1.jpg',
        'assets/images/C&IB-2.jpg',
        'assets/images/C&IB-3.jpg',
        'assets/images/C&IB-4.jpg',
        'assets/images/C&IB-5.jpg',

      ],
      currentIndex: 0
    },
    {
      title: 'Social Media Design',
      category: 'Social Media',
      description: 'Web banners and ad campaigns',
      images: [
        'assets/images/SM-1.jpg',
        'assets/images/SM-2.jpg',
        'assets/images/SM-3.jpg',
        'assets/images/SM-4.jpg',
        'assets/images/SM-5.jpg',
        'assets/images/SM-6.jpg',

      ],
      currentIndex: 0
    },
    {
      title: 'Educational Institute Ads',
      category: 'Institute Ads Design',
      description: 'Business cards and stationery design',
      images: [
        'assets/images/IA-1.jpg',
        'assets/images/IA-2.jpg',
        'assets/images/IA-3.jpg',
        'assets/images/IA-4.jpg',

      ],
      currentIndex: 0
    }
  ];

  constructor(private router: Router) {}

  nextImage(projectIndex: number): void {
    const project = this.projects[projectIndex];
    if (project.currentIndex < project.images.length - 1) {
      project.currentIndex++;
    }
  }

  previousImage(projectIndex: number): void {
    const project = this.projects[projectIndex];
    if (project.currentIndex > 0) {
      project.currentIndex--;
    }
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}