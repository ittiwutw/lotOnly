import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavLottoPage } from './fav-lotto.page';

describe('FavLottoPage', () => {
  let component: FavLottoPage;
  let fixture: ComponentFixture<FavLottoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavLottoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavLottoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
