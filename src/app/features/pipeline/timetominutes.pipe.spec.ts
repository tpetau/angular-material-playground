import { TimeToMinutesPipe } from './timetominutes.pipe';

describe('TimetominutesPipe', () => {

  const pipe = new TimeToMinutesPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('convert valid time to minutes', async () => {
    expect(pipe.transform("10:23")).toBe(623);
  });

  it('convert invalid time to minutes', async () => {
    expect(Number.isNaN(pipe.transform("23"))).toBeTruthy();
  });
  it('convert invalid time to minutes', async () => {
    expect(Number.isNaN(pipe.transform(":23"))).toBeTruthy();
  });
  it('convert invalid time to minutes', async () => {
    expect(Number.isNaN(pipe.transform(":"))).toBeTruthy();
  });
  it('convert invalid time to minutes', async () => {
    expect(Number.isNaN(pipe.transform("00:"))).toBeTruthy();
  });
});
