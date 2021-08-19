import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-find-string',
  templateUrl: './find-string.component.html',
  styleUrls: ['./find-string.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FindStringComponent implements OnInit, OnChanges {
  @Input() color: 'red' | 'blue' | 'yellow';
  @ViewChild('content', { static: true }) content: ElementRef;
  originalContent = '';
  controlledContent = '';
  text = '';

  constructor() { }

  ngOnInit(): void {
    this.controlledContent = this.originalContent = this.content.nativeElement.textContent;
  }

  ngOnChanges(): void {
    if (this.text != '') {
      this.controlledContent = this.originalContent.replace(
        new RegExp(this.text, 'g'), 
        `<span class="${this.color}">${this.text}</span>`)
    }
  }

  find(data: any) {
    const value = data.target.value;
    this.controlledContent = this.originalContent.replace(
      new RegExp(value, 'g'), 
      `<span class="${this.color}">${value}</span>`)
      // this.controlledContent = this.originalContent.replace(
      //   new RegExp(value, 'g'), 
      //   `<span style="background-color: ${this.color}">${value}</span>`)
  }
}
