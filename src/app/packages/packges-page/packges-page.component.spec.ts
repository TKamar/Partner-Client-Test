import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackgesPageComponent } from './packges-page.component';

describe('PackgesPageComponent', () => {
  let component: PackgesPageComponent;
  let fixture: ComponentFixture<PackgesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackgesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackgesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
