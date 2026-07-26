import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // Aquí estaba el error, debe ser AppComponent

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));