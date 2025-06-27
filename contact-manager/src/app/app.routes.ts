import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () =>
      import(
        './routes/contact-manager-home/contact-manager-home.component'
      ).then((m) => m.ContactManagerHomeComponent),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import(
        './routes/contact-manager-detail/contact-manager-detail.component'
      ).then((m) => m.ContactManagerDetailComponent),
  },
  {
    path: 'add',
    data: { mode: 'add' },
    loadComponent: () =>
      import(
        './routes/contact-manager-form/contact-manager-form.component'
      ).then((m) => m.ContactManagerFormComponent),
  },
  {
    path: 'edit/:id',
    data: { mode: 'edit' },
    loadComponent: () =>
      import(
        './routes/contact-manager-form/contact-manager-form.component'
      ).then((m) => m.ContactManagerFormComponent),
  },
];
