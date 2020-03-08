import { MainComponent } from './main.component';

describe('MainComponent', () => {
  it('should create', () => {
    const component = new MainComponent();
    component.ngOnInit();

    expect(component).toBeTruthy();
  });
});
