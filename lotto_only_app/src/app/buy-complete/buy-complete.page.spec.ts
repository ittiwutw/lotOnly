import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyCompletePage } from './buy-complete.page';

describe('BuyCompletePage', () => {
  let component: BuyCompletePage;
  let fixture: ComponentFixture<BuyCompletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCompletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyCompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
