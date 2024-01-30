import {
  BaseHarnessFilters,
  ComponentHarness,
  ComponentHarnessConstructor,
  HarnessPredicate
} from '@angular/cdk/testing';

interface SliderHarnessFilters extends BaseHarnessFilters {
  minValue?: number;
}

export class MySliderHarness extends ComponentHarness {

  static hostSelector = 'your-slider-selector';

  private readonly plusButton = this.locatorFor('.plus-button');
  private readonly minusButton = this.locatorFor('.minus-button');
  private readonly value = this.locatorFor('.slider-value');

  async clickPlus(): Promise<void> {
    await (await this.plusButton()).click();
  }

  async clickMinus(): Promise<void> {
    await (await this.minusButton()).click();
  }

  async getValue(): Promise<number> {
    const valueEl = await this.value();
    return parseFloat(await valueEl.text());
  }

  async getMinValue(): Promise<number> {
    const minValueEl = await this.locatorFor('.min-value')();
    return parseFloat(await minValueEl.text());
  }

  async disabled(): Promise<boolean> {
    const sliderEl = await this.locatorFor('.slider')();
    return (await sliderEl.getAttribute('disabled')) !== null;
  }

  async setValue(value: number): Promise<void> {
    const sliderInputEl = await this.locatorFor('.slider-input')();
    await sliderInputEl.sendKeys(value.toString());
  }

  static with<T extends MySliderHarness>(
    this: ComponentHarnessConstructor<T>,
    options: SliderHarnessFilters = {}
  ): HarnessPredicate<T> {
    return new HarnessPredicate<T>(this, options)
      .addOption('minValue', options.minValue, async (harness, minValue) => {
        if (harness instanceof MySliderHarness) {
          const actualMinValue = await harness.getMinValue();
          return actualMinValue === minValue;
        }
        return false;
      });
  }
}
