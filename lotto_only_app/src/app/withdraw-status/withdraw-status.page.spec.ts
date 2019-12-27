import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WithdrawStatusPage } from './withdraw-status.page';

describe('WithdrawStatusPage', () => {
  let component: WithdrawStatusPage;
  let fixture: ComponentFixture<WithdrawStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WithdrawStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
