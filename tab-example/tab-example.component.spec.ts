import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExampleComponent } from './tab-example.component';

describe('TabExampleComponent', () => {
  let component: TabExampleComponent;
  let fixture: ComponentFixture<TabExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
