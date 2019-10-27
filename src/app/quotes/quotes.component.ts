import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import {getFullYear, getMinutes, getSeconds} from 'ngx-bootstrap/chronos/utils/date-getters';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

// It maintains quote Model
  quoteModel: Quote;
// It maintains quote form display status. By default it will be false.
  showNew: Boolean = false;
// It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';

// This method associate to New Button.
  onNew() {
// Initiate new quote.
    this.quoteModel = new Quote("", "", "", new Date(), 0, 0);
// Change submitType to 'Save'.
    this.submitType = 'Save';
// display quote entry section.
    this.showNew = true;
  }

// This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
// Push quote model object into quote list.
      this.quotes.push(this.quoteModel);
    }
// Hide quote entry section.
    this.showNew = false;
  }

// This method associate to Cancel Button.
  onCancel() {
// Hide quote entry section.
    this.showNew = false;
  }

  quotes = [
    new Quote('Laughter is poison to fear.', 'George R.R. Martin', 'Admin', new Date(2019, 10, 27, 23, 1), 0, 0),
    new Quote('Coding is fun!', 'Ahmad', 'User', new Date(2019, 10, 26, 23, 1), 0, 0),
    new Quote('People who use time wisely spend it on activities that advance their overall purpose in life.', 'John C. Maxwell', 'Admin', new Date(2019, 4, 27, 23, 5), 0, 0),
    new Quote('Most men would rather deny a hard truth than face it..', 'George R.R. Martin', 'Admin', new Date(2019, 10, 26, 23, 8), 0, 0),
    new Quote('If Internet Explorer is brave enough to ask to be your default browser, You are brave enough to ask that girl out.', 'Windows', 'Microsoft', new Date(2019, 10, 26, 7, 42), 0, 0),
    new Quote('If you want to know what a man like, take a good look at how he treats his inferiors, not his equals.', ' J.K. Rowling', 'Harry Potter and the Goblet of Fire', new Date(2019, 10, 26, 7, 43), 0, 0),
    new Quote('Measuring programming progress by lines of code is like measuring aircraft building progress by weight.', 'Bill Gates', 'co-founder of Microsoft', new Date(2019, 10, 26, 7, 45), 0, 0),
    new Quote('A user interface is like a joke. If you have to explain it, it�s not that good..', 'Ahmad', 'Admin', new Date(2019, 10, 26, 7, 46), 0, 0),
    new Quote(' Programming languages are all the same; you just need a logic. ', 'Ahmad', 'Admin', new Date(2019, 10, 26, 7, 49), 0, 0)

  ];



  delete(i) {
    this.quotes.splice(i, 1);
      }

  constructor() { }

  ngOnInit() {
  }

}
