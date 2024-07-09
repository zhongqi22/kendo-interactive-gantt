import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttFlatDataComponent } from './gantt-flat-data.component';

describe('GanttFlatDataComponent', () => {
  let component: GanttFlatDataComponent;
  let fixture: ComponentFixture<GanttFlatDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GanttFlatDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GanttFlatDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
