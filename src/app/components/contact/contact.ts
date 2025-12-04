import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-angular';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly Instagram = Instagram;
  readonly Facebook = Facebook;
  readonly Linkedin = Linkedin;
  readonly MessageCircle = MessageCircle;

  socialLinks = [
    {
      name: 'Instagram',
      username: '@khawargraphics',
      url: 'https://instagram.com/khawargraphics',
      icon: this.Instagram,
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      name: 'Facebook',
      username: '/khawargraphics',
      url: 'https://facebook.com/khawargraphics',
      icon: this.Facebook,
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'LinkedIn',
      username: 'Hafiz Khawar Aziz',
      url: 'https://www.linkedin.com/in/hafizkhawaraziz',
      icon: this.Linkedin,
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'WhatsApp',
      username: '0323-0533523',
      url: 'https://wa.me/923230533523',
      icon: this.MessageCircle,
      gradient: 'from-green-500 to-green-700'
    }
  ];

}
