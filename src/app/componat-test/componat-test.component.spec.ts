import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponatTestComponent } from './componat-test.component';

describe('ComponatTestComponent', () => {
  let component: ComponatTestComponent;
  let fixture: ComponentFixture<ComponatTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponatTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponatTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
