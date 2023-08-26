import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph') contentParagraph: ElementRef;

  constructor() {
    console.log('constructor is called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called!');
    console.log(
      'Text Content of Paragraph: ' +
        this.contentParagraph.nativeElement.textContent
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit is called!');
    console.log('Text Context: ' + this.header.nativeElement.textContent);
    console.log(
      'Text Content of Paragraph: ' +
        this.contentParagraph.nativeElement.textContent
    );
  }
  ngDoCheck(): void {
    console.log('ngDoCheck is called!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called!');
    console.log('Text Context: ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy is called!');
  }
}
