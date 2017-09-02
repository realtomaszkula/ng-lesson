import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
  picture?: string;
  price?: number;
  startDate?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  cards: Card[] = [
    { title: 'Studiuj.pl', text: 'asdfasdf', startDate: '1991-05-12' },
    { title: 'Wypoczywaj.pl', text: 'asdfasdfasdfasdf', price: 2000 },
    { title: 'Wypoczywaj.pl', text: 'asdfasdfasdfasdf', price: 2000 },
    { title: 'Wypoczywaj.pl', text: 'asdfasdfasdfasdf', price: 2000 },
    { title: 'Wypoczywaj.pl', text: 'asdfasdfasdfasdf', price: 2000 },
    { title: 'Wypoczywaj.pl', text: 'asdfasdfasdfasdf', price: 2000 },
    { title: 'Wypoczywaj.pl', text: 'asdfasdfasdfasdf', price: 2000 },
    { title: 'Pracujw.pl', text: 'asdfasdfasd', picture: 'http://via.placeholder.com/200/200' },
    { title: 'Wypoczywaj.pl', text: 'asdfasdfasdfasdf', price: 3000 },
    { title: 'Wypoczywaj.pl', text: 'asdfasdfasdfasdf', price: 4000 },
    { title: 'Wypoczywaj.pl', text: 'asdfasdfasdfasdf', price: 2000 },
    { title: 'Wypoczywaj.pl', text: 'asdfasdfasdfasdf', price: 2000 },
    { title: 'Wypoczywaj.pl', text: 'asdfasdfasdfasdf', price: 2000 },
  ];
}
