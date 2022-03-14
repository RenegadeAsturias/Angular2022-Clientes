import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CocheComponent } from './coche/coche.component';
import { CochesComponent } from './coches/coches.component';

@NgModule({
  declarations: [
    AppComponent,
    CochesComponent,
    CocheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
