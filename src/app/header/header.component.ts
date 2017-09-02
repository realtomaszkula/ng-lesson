import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../app.component';

const verify = (style: string): boolean => {
  const validStyles = ['flex-start', 'flex-end', 'center'];
  return validStyles.includes(style);
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() card: Card;
  @Input() imagePosition: 'flex-end' | 'flex-start';

  get title() {
    return this.card.title;
  }

  get text() {
    return this.card.text;
  }

  get price() {
    return this.card.price ? this.card.price : 1000000;
  }

  get startDate() {
    return this.card.startDate ? this.card.startDate : 'NO DATE';
  }

  get picture() {
    return this.card.picture ? this.card.picture : 'http://via.placeholder.com/50/50';
  }

  get imageStyle() {
    return {
      'justify-content': verify(this.imagePosition) ? this.imagePosition : 'flex-start',
    };
  }

  constructor() { }

  ngOnInit() { }

}
