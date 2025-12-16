import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, MapPin, ChevronRight, Users, Award } from 'lucide-angular';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './clients.html',
  styleUrls: ['./clients.css']
})
export class Clients  {

  readonly MapPin = MapPin;
  readonly ChevronRight = ChevronRight;
  readonly Users = Users;
  

  featuredClients = [
    {
      name: 'Muhammadan Educational System',
      logo: 'assets/images/MSC-logo.jpg', // Replace with actual logo path
      location: 'Azad Kashmir',
      duration: '2022 – Present',
      description: 'Providing ongoing creative support as a Graphic Designer for over two years, delivering high-quality academic visuals, institutional branding, campaign materials, and digital communication assets.',
      services: ['Institutional Branding', 'Academic Visuals', 'Campaign Materials', 'Digital Assets']
    },
    {
      name: 'Jammu Kashmir Medical Students Forum',
      logo: 'assets/images/MSF-logo.jpg', // Replace with actual logo path
      location: 'Azad Kashmir',
      duration: '2021 – Present',
      description: 'Serving as the Forum\'s design partner for three years, producing medical awareness campaigns, conference branding, event visuals, and specialized social media content.',
      services: ['Medical Campaigns', 'Conference Branding', 'Event Visuals', 'Social Media']
    },
    {
      name: 'Kashmir Youth Literary & Debating Society',
      logo: 'assets/images/KYLDS-logo.jpg', // Replace with actual logo path
      location: 'Azad Kashmir',
      duration: 'Five-Year Engagement',
      description: 'Supported the Society\'s literary and debating events for five years through consistent design services, including event identities, certificates, posters, and digital promotional campaigns.',
      services: ['Event Identity', 'Certificates', 'Posters', 'Digital Campaigns']
    },
    {
      name: 'The Orators – Literary & Debating Society',
      logo: 'assets/images/Orators-logo.jpg', // Replace with actual logo path
      location: 'Azad Kashmir',
      duration: '2022 – Present',
      description: 'Providing ongoing design services for over two years, developing event branding, certificates, campaign visuals, and social media identity assets.',
      services: ['Event Branding', 'Certificates', 'Campaign Visuals', 'Social Media']
    },
    {
      name: 'Askari Foundation School',
      logo: 'assets/images/AFS-logo.jpg', // Replace with actual logo path
      location: 'Hajira',
      duration: 'One-Year Engagement',
      description: 'Designed comprehensive school graphics including event branding, promotional materials, certificates, and campus visuals during the one-year collaboration.',
      services: ['Event Branding', 'Promotional Materials', 'Certificates', 'Campus Visuals']
    },
    {
      name: 'Stars Science College',
      logo: 'assets/images/SSC-logo.jpg', // Replace with actual logo path
      location: 'Hajira',
      duration: 'Two-Year Engagement',
      description: 'Developed academic promotional designs, admission advertising campaigns, banners, and social media creative assets across a two-year period.',
      services: ['Academic Promotions', 'Admission Campaigns', 'Banners', 'Social Media']
    }
  ];

  additionalClients = [
    {
      name: 'Muslim Public School',
      logo: 'assets/images/MPS-logo.jpg', // Replace with actual logo path
      description: 'Delivered a full range of school design materials, including academic promotions, event branding, and institutional print media.'
    },
    {
      name: 'Sasha Nexus',
      logo: 'assets/images/Sasha-logo.jpg', // Replace with actual logo path
      description: 'Crafted the complete brand identity package, including a modern logo and visual identity suite optimized for digital platforms.'
    },
    {
      name: 'Talha Super Mart',
      logo: 'assets/images/Talha-logo.jpg', // Replace with actual logo path
      description: 'Designed the brand logo and packaging concepts, enhancing product visibility and strengthening overall retail branding.'
    },
    {
      name: 'Kashmir Craft Store',
      logo: 'assets/images/KCS-logo.jpg', // Replace with actual logo path
      description: 'Created promotional banners and social media designs to support the store\'s digital marketing and brand presence.'
    },
    {
      name: 'Muskan Welfare Foundation',
      logo: 'assets/images/MWF-logo.jpg', // Replace with actual logo path
      description: 'Redesigned the organization\'s logo and developed professional employment identity cards, elevating their visual identity.'
    }
  ];

 
  constructor(private router: Router) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  
}