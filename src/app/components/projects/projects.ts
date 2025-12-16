import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, Sparkles, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-angular';

interface Project {
  title: string;
  category: string;
  description: string;
  images: string[];
  currentIndex: number;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {

  projectsHeaderVisible = false;
  projectsGridVisible = false;

   @ViewChild('projectsHeader') projectsHeader!: ElementRef;
  @ViewChild('projectsGrid') projectsGrid!: ElementRef;


  readonly Sparkles = Sparkles;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly ArrowRight = ArrowRight;

  

  featuredProjects: Project[] = [
   {
      title: 'Brand & Identity Design',
      category: 'Logo Design',
      description: 'Complete brand identity for educational institution',
      images: [
        'assets/images/B&I-1.jpg',
        'assets/images/B&I-2.jpg',
        'assets/images/B&I-3.jpg'
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

 

  ngAfterViewInit() {
    this.observeSections();
  }

  observeSections() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === this.projectsHeader.nativeElement) {
              this.projectsHeaderVisible = true;
            }

            if (entry.target === this.projectsGrid.nativeElement) {
              this.projectsGridVisible = true;
            }

            observer.unobserve(entry.target); // run once
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(this.projectsHeader.nativeElement);
    observer.observe(this.projectsGrid.nativeElement);
  }

  nextImage(projectIndex: number): void {
    const project = this.featuredProjects[projectIndex];
    if (project.currentIndex < project.images.length - 1) {
      project.currentIndex++;
    }
  }

  previousImage(projectIndex: number): void {
    const project = this.featuredProjects[projectIndex];
    if (project.currentIndex > 0) {
      project.currentIndex--;
    }
  }

  goToImage(projectIndex: number, imageIndex: number): void {
    this.featuredProjects[projectIndex].currentIndex = imageIndex;
  }

   navigateToContact(): void {
    this.router.navigate(['/contact']).then(() => {
      window.scrollTo(0, 0); 
    });;;
  }

}

function nextImage(projectIndex: any, number: any) {
  throw new Error('Function not implemented.');
}
