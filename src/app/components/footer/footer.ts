import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, Facebook, Linkedin, MessageCircle, Instagram, MapPin, Phone, Mail, ChevronUp, X } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  readonly Instagram = Instagram;
  readonly Facebook = Facebook;
  readonly Linkedin = Linkedin;
  readonly MessageCircle = MessageCircle;
  readonly MapPin = MapPin;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly ChevronUp = ChevronUp;
  readonly X = X;

  currentYear = new Date().getFullYear();
  showBackToTop = false;
  showPrivacyModal = false;
  showTermsModal = false;

  socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/khawargraphics', icon: this.Instagram },
    { name: 'Facebook', url: 'https://facebook.com/khawargraphics', icon: this.Facebook },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hafizkhawaraziz', icon: this.Linkedin },
    { name: 'WhatsApp', url: 'https://wa.me/923230533523', icon: this.MessageCircle }
  ];

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 500;
  }

  scrollToSection(sectionId: string) {
    if (this.router.url === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openPrivacy() {
    this.showPrivacyModal = true;
    document.body.style.overflow = 'hidden';
  }

  closePrivacy() {
    this.showPrivacyModal = false;
    document.body.style.overflow = 'auto';
  }

  openTerms() {
    this.showTermsModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeTerms() {
    this.showTermsModal = false;
    document.body.style.overflow = 'auto';
  }
}