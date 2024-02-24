import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { CardComponent } from './ui/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { MovieStoreComponent } from './application/movie-store/movie-store.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    PaginationComponent,
    MovieStoreComponent,
    SearchFilterPipe,
    OrderByPipe 
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [SearchFilterPipe,
              OrderByPipe
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
