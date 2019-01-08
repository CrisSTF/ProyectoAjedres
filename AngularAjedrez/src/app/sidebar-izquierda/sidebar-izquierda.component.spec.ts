import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarIzquierdaComponent } from './sidebar-izquierda.component';

describe('SidebarIzquierdaComponent', () => {
  let component: SidebarIzquierdaComponent;
  let fixture: ComponentFixture<SidebarIzquierdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarIzquierdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
