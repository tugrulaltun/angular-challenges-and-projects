import {TestBed} from '@angular/core/testing';
import {MySliderHarness} from './slider/slider.harness';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let harness: MySliderHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();

    const loader = TestbedHarnessEnvironment.loader(TestBed.createComponent(AppComponent));
    harness = await loader.getHarness(MySliderHarness);

  });

  it('should increase value when plus is clicked', async () => {
    const initialValue = await harness.getValue();
    await harness.clickPlus();
    const newValue = await harness.getValue();
    expect(newValue).toBeGreaterThan(initialValue);
  });

  it('should decrease value when minus is clicked', async () => {
    const initialValue = await harness.getValue();
    await harness.clickMinus();
    const newValue = await harness.getValue();
    expect(newValue).toBeLessThan(initialValue);
  });

  it('should correctly set a specific value', async () => {
    const testValue = 50;
    await harness.setValue(testValue);
    const currentValue = await harness.getValue();
    expect(currentValue).toBe(testValue);
  });

  it('should not go below the minimum value', async () => {
    const minValue = await harness.getMinValue();
    await harness.setValue(minValue - 1);
    const currentValue = await harness.getValue();
    expect(currentValue).toBeGreaterThanOrEqual(minValue);
  });

  it('should be disabled when appropriate', async () => {
    const isDisabled = await harness.disabled();
    expect(isDisabled).toBe(true);
  });
});
