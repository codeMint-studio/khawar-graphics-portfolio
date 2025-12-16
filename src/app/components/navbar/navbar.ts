import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, Routes } from '@angular/router';
import { LucideAngularModule, Menu, X } from 'lucide-angular';
import { filter } from 'rxjs/operators';
import { Home } from '../home/home';
import { Projects } from '../projects/projects';
import { Services } from '../services/services';
import { Clients } from '../clients/clients';
import { About } from '../about/about';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  readonly Menu = Menu;
  readonly X = X;
  
  isMenuOpen = false;
  scrolled = false;
  activeSection: string = 'home';
  isHomePage: boolean = true;

 navLinks = [
  { id: 'home', label: 'Home', path: '/', scroll: true },

  { id: 'services', label: 'Services', path: '/services', scroll: false },
  { id: 'projects', label: 'Projects', path: '/projects', scroll: false },
  { id: 'client', label: 'Clients', path: '/clients', scroll: false },
  { id: 'about', label: 'About', path: '/about', scroll: false },
  { id: 'contact', label: 'Contact', path: '/contact', scroll: false }
];

 routes: Routes = [
  { path: '', component: Home },

  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  { path: 'clients', component: Clients },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
];


  constructor(public router: Router) {
    // Check if on home page
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isHomePage = this.router.url === '/';
      if (this.isHomePage) {
        setTimeout(() => this.updateActiveSection(), 100);
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
    
    // Only update active section if on home page
    if (this.isHomePage) {
      this.updateActiveSection();
    }
  }

  updateActiveSection() {
    const scrollPosition = window.scrollY + 200; // Offset for navbar height
    
    // Check each section
    for (let i = this.navLinks.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.navLinks[i].id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.activeSection = this.navLinks[i].id;
          break;
        }
      }
    }
  }

  handleNavClick(link: any) {
  // HOME LINK
  if (link.scroll && this.router.url === '/') {
    this.scrollToSection(link.id);
  }
  // HOME LINK from other page
  else if (link.scroll) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => this.scrollToSection(link.id), 100);
    });
  }
  // ALL OTHER LINKS → NORMAL ROUTING
  else {
    this.router.navigate([link.path]);
  }

  this.closeMenu();
}


  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}