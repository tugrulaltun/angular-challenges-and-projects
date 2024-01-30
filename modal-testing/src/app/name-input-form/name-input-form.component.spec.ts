import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInputFormComponent } from './name-input-form.component';

describe('NameInputFormComponent', () => {
  let component: NameInputFormComponent;
  let fixture: ComponentFixture<NameInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameInputFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
