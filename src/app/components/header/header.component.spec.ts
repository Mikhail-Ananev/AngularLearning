import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  it('should create', () => {
    const component = new HeaderComponent();
    component.ngOnInit();

    expect(component).toBeTruthy();
  });
});
