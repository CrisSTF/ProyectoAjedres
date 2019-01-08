import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDerechaComponent } from './sidebar-derecha.component';

describe('SidebarDerechaComponent', () => {
  let component: SidebarDerechaComponent;
  let fixture: ComponentFixture<SidebarDerechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDerechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
