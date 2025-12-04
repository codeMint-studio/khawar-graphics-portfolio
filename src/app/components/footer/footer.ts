import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule,  Facebook, Linkedin, MessageCircle, Instagram } from 'lucide-angular';
import { InstagramIcon } from 'lucide-angular/src/icons';


@Component({
  selector: 'app-footer',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
   readonly Instagram = Instagram;
  readonly Facebook = Facebook;
  readonly Linkedin = Linkedin;
  readonly MessageCircle = MessageCircle;

  currentYear = new Date().getFullYear();

  socialLinks = [
    { url: 'https://instagram.com/khawargraphics', icon: this.Instagram },
    { url: 'https://facebook.com/khawargraphics', icon: this.Facebook },
    { url: 'https://www.linkedin.com/in/hafizkhawaraziz', icon: this.Linkedin },
    { url: 'https://wa.me/923230533523', icon: this.MessageCircle }
  ];

}
