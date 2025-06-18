import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { default as Home } from '../views/home/home';
import { default as Skills } from '../views/skills/skills';
import { default as Experience } from '../views/experience/experience';
import { default as Projects } from '../views/projects/projects';
import { default as NotFound } from '../views/not-found/not-found';

describe('App', () => {
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
      teardown: { destroyAfterEach: true },
    }).compileComponents();
    router = TestBed.inject(Router);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('loads the home component on initial load of app', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/home', Home);
    expect(router.url).toBe('/home');
    expect(component).toBeTruthy();
    expect(harness.routeNativeElement?.textContent).toContain('About Me');
  });

  it('loads the skills component on page navigation to /skills', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/skills', Skills);
    expect(router.url).toBe('/skills');
    expect(component).toBeTruthy();
    expect(harness.routeNativeElement?.textContent).toContain('Skills');
  });

  it('loads the experience component on page navigation to /experiences', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/experiences', Experience);
    expect(router.url).toBe('/experiences');
    expect(component).toBeTruthy();
    expect(harness.routeNativeElement?.textContent).toContain('Experiences');
  });

  it('loads the projects component on page navigation to /projects', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/projects', Projects);
    expect(router.url).toBe('/projects');
    expect(component).toBeTruthy();
    expect(harness.routeNativeElement?.textContent).toContain('Projects');
  });

  it('loads the not-found component on navigating to a non-existing page', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/AZERTY', NotFound);
    expect(router.url).toBe('/AZERTY');
    expect(component).toBeTruthy();
    expect(harness.routeNativeElement?.textContent).toContain('404');
  });
});
