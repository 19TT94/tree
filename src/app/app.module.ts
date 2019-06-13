import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// add bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { FactoryComponent } from './factory/factory.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
