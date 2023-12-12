import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anchor-navigation';

  activeSection: string = '';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    const sections = ['section1-content', 'section2-content', 'section3-content'];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = section.replace('-content', '');
          this.loadComponent(this.activeSection);
          break;
        }
      }
    }
  }

  loadComponent(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const component = element.getAttribute('data-component');
      if (component) {
        import(`./${section}/${section}.component`).then((module) => {
          element.innerHTML = '';
          element.appendChild(document.createElement(component));
        });
      }
    }
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
