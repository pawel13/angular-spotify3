import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPlaylistComponent } from './selected-playlist.component';

describe('SelectedPlaylistComponent', () => {
  let component: SelectedPlaylistComponent;
  let fixture: ComponentFixture<SelectedPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
