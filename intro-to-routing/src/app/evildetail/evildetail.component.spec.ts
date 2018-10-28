import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvildetailComponent } from './evildetail.component';

describe('EvildetailComponent', () => {
  let component: EvildetailComponent;
  let fixture: ComponentFixture<EvildetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvildetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvildetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
