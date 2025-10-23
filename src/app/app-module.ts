import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { About } from './about/about';
import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { Contact } from './contact/contact';
import { Home } from './home/home';

@NgModule({
  declarations: [
    App,
    Home,
    About,
    Contact,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
