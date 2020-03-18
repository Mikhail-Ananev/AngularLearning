import { HoursMinutesPipe } from './hours-minutes.pipe';

describe('HoursMinutesPipe', () => {
  const pipe = new HoursMinutesPipe();
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "90" to "1h 30min"', () => {
    expect(pipe.transform(90)).toBe('1h 30min');
  });

  it('transforms "47" to "47min"', () => {
    expect(pipe.transform(47)).toBe('47min');
  });
});
