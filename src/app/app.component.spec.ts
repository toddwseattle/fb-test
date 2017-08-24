import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import {Observable} from 'rxjs/Observable';

describe('AppComponent', () => {

    const vegfruitMock = [{name: 'apple', type: 'fruit', number: 2},
                        {name: 'oranges', type: 'fruit', number: 3},
                        {name: 'onion', type: 'vegetable', number: 5} ];
    const DbMock = {
       list: (path) => {
          const mockobs = Observable.create(observer => {
          observer.next(vegfruitMock);
        });
        return (mockobs);
      }
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
      //  AngularFireDatabaseModule
      ],
      providers: [{provide: AngularFireDatabase, useValue: DbMock }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  it('should fill items Observable with the items from the database mock when subscribed', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    app.items.subscribe(produce => {
      expect(produce.length).toBe(vegfruitMock.length);
    })
  }));
});
