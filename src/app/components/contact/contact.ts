import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Instagram, 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  ArrowRight, 
  Zap, 
  Clock, 
  MapPin, 
  Mail, 
  Globe 
} from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  // Visibility states
  contactHeaderVisible = false;
  contactGridVisible = false;
  contactCtaVisible = false;

  // ViewChild references
  @ViewChild('contactHeader') contactHeader!: ElementRef;
  @ViewChild('contactGrid') contactGrid!: ElementRef;
  @ViewChild('contactCta') contactCta!: ElementRef;

  // Icon references
  readonly Instagram = Instagram;
  readonly Facebook = Facebook;
  readonly Linkedin = Linkedin;
  readonly MessageCircle = MessageCircle;
  readonly ArrowRight = ArrowRight;
  readonly Zap = Zap;
  readonly Clock = Clock;
  readonly MapPin = MapPin;
  readonly Mail = Mail;
  readonly Globe = Globe;

  // Social media links
  socialLinks = [
    {
      name: 'Instagram',
      username: '@khawargraphics',
      url: 'https://instagram.com/khawargraphics',
      icon: this.Instagram,
      colorClass: 'icon-instagram'
    },
    {
      name: 'Facebook',
      username: '/khawargraphics',
      url: 'https://facebook.com/khawargraphics',
      icon: this.Facebook,
      colorClass: 'icon-facebook'
    },
    {
      name: 'LinkedIn',
      username: 'Hafiz Khawar Aziz',
      url: 'https://www.linkedin.com/in/hafizkhawaraziz',
      icon: this.Linkedin,
      colorClass: 'icon-linkedin'
    },
    {
      name: 'WhatsApp',
      username: '0323-0533523',
      url: 'https://wa.me/923230533523',
      icon: this.MessageCircle,
      colorClass: 'icon-whatsapp'
    }
  ];

  ngAfterViewInit() {
    // Start observing sections after view initialization
    setTimeout(() => {
      this.observeSections();
    }, 100);
  }

  observeSections() {
    const options = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger visibility based on which element is intersecting
          if (entry.target === this.contactHeader.nativeElement) {
            this.contactHeaderVisible = true;
          }
          
          if (entry.target === this.contactGrid.nativeElement) {
            this.contactGridVisible = true;
          }
          
          if (entry.target === this.contactCta.nativeElement) {
            this.contactCtaVisible = true;
          }

          // Stop observing once visible
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all sections
    if (this.contactHeader?.nativeElement) {
      observer.observe(this.contactHeader.nativeElement);
    }
    
    if (this.contactGrid?.nativeElement) {
      observer.observe(this.contactGrid.nativeElement);
    }
    
    if (this.contactCta?.nativeElement) {
      observer.observe(this.contactCta.nativeElement);
    }
  }

  // Optional: Scroll to top of contact section
  scrollToContact() {
    const element = document.querySelector('.contact-section-wrapper');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}