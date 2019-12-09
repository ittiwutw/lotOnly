import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckLottoPage } from './check-lotto.page';

describe('CheckLottoPage', () => {
  let component: CheckLottoPage;
  let fixture: ComponentFixture<CheckLottoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckLottoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckLottoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
