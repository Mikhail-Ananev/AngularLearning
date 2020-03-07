import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('should create', () => {
    const component = new FooterComponent();
    component.ngOnInit();

    expect(component).toBeTruthy();
  });
});
