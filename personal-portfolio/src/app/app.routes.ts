import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () => import('../views/home/home'),
  },
  { path: 'home', redirectTo: '' },
  {
    path: 'experiences',
    title: 'Experiences',
    loadComponent: () => import('../views/experience/experience'),
  },
  {
    path: 'skills',
    title: 'Skills',
    loadComponent: () => import('../views/skills/skills'),
  },
  {
    path: 'projects',
    title: 'Projects',
    loadComponent: () => import('../views/projects/projects'),
  },
  {
    path: '**',
    title: 'Not Found',
    loadComponent: () => import('../views/not-found/not-found'),
  },
];
