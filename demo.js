import 'reflect-metadata';
import 'rxjs';
import { Component, View, Inject } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';

import { MODERN_COMPONENT, ResumeService } from 'app/resume/resume';

@Component({
  selector: 'demo'
})
@View({
  template: `
  <resume [resume]='resume'></resume>
  `,
  directives: [ MODERN_COMPONENT ]
})
export class DemoComponent {
  constructor(@Inject(ResumeService) resumeService) {
    resumeService.loadResume('jspm_packages/github/fluentdesk/jane-q-fullstacker@0.4.0/resume/jane-resume.json');
    resumeService.resume$.subscribe(update => this.resume = update);
  }
}

bootstrap(DemoComponent, [
  HTTP_PROVIDERS,
  ResumeService
]);
