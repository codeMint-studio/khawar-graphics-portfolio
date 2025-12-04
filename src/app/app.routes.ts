import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { Clients } from './components/clients/clients';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';
import { Portfolio } from './components/portfolio/portfolio';

export const routes: Routes = [
    { path: '', component: Home },
  { path: 'services', component: Services },
  { path: 'projects', component: Projects },
  { path: 'portfolio', component: Portfolio },
  { path: 'clients', component: Clients },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
