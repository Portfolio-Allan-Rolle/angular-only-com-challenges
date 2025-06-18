import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('../views/home/home'),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'experiences',
    pathMatch: 'full',
    title: 'Experiences',
    loadComponent: () => import('../views/experience/experience'),
  },
  {
    path: 'skills',
    pathMatch: 'full',
    title: 'Skills',
    loadComponent: () => import('../views/skills/skills'),
  },
  {
    path: 'projects',
    pathMatch: 'full',
    title: 'Projects',
    loadComponent: () => import('../views/projects/projects'),
  },
  {
    path: '**',
    title: 'Not Found',
    loadComponent: () => import('../views/not-found/not-found'),
  },
];
