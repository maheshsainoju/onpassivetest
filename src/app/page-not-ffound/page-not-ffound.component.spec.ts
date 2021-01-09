import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFFoundComponent } from './page-not-ffound.component';

describe('PageNotFFoundComponent', () => {
  let component: PageNotFFoundComponent;
  let fixture: ComponentFixture<PageNotFFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
