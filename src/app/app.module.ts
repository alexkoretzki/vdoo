import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingersComponent } from './components/singers/singers.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { RouterModule } from '@angular/router';
import { AkSelectModule } from './ui/ak-select/ak-select.module';
import { SpotifyAuthInterceptor } from './core/interceptors/spotify-auth.interceptor';
import { CardModule } from './ui/card/card.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SingersComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    AkSelectModule,
    CardModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyAuthInterceptor,
      multi: true,
    },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
