import { NgModule, TRANSLATIONS } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'node_modules/ngx-cookie-service';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { PipesPipe } from './shared/pipes/pipes.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Pipev2Pipe } from './shared/pipes/pipev2.pipe';
import { Pipev3Pipe } from './shared/pipes/pipev3.pipe';
import { Pipe4Pipe } from './shared/pipes/pipe4.pipe';
import { Pipes5Pipe } from './shared/pipes/pipes5.pipe';
import { UsuarioComponent } from './components/m-certificador/usuario/usuario.component';
import { PrincipalComponent } from './components/main/principal/principal.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { CategoriaComponent } from './components/m-certificador/categoria/categoria.component';
import { ClienteComponent } from './components/m-certificador/cliente/cliente.component';
import { ProductoComponent } from './components/m-certificador/producto/producto.component';
import { VentaComponent } from './components/m-certificador/venta/venta.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RegistoComponent } from './components/m-certificador/registo/registo.component';
import { LoginComponent } from './components/m-certificador/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    PipesPipe,
    Pipev2Pipe,
    Pipev3Pipe,
    Pipe4Pipe,
    Pipes5Pipe,
    UsuarioComponent,
    PrincipalComponent,
    NavbarComponent,
    CategoriaComponent,
    ClienteComponent,
    ProductoComponent,
    VentaComponent,
    RegistoComponent,
    LoginComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
    ReactiveFormsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
