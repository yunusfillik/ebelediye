import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider-option',
  templateUrl: './slider-option.component.html',
  styleUrls: ['./slider-option.component.scss'],
})
export class SliderOptionComponent implements OnInit {
  @Input() data: any;
  @Output() onClick = new EventEmitter<any>();
  @ViewChild('template', { static: true }) template!: TemplateRef<any>;

  constructor() {}

  ngOnInit() {
  }

  handleClick() {
    this.onClick.emit(this.data);
  }
}
