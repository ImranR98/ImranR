import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPagesContainerComponent } from './other-pages-container.component';

describe('OtherPagesContainerComponent', () => {
  let component: OtherPagesContainerComponent;
  let fixture: ComponentFixture<OtherPagesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPagesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPagesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
