import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemModal } from './edit-item-modal';

describe('EditItemModal', () => {
  let component: EditItemModal;
  let fixture: ComponentFixture<EditItemModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditItemModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditItemModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
