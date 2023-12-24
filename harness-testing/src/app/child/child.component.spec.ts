import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatInputHarness} from '@angular/material/input/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {HarnessLoader} from '@angular/cdk/testing';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ChildComponent} from './child.component';
import {MatFormFieldModule} from "@angular/material/form-field";

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      declarations: [ChildComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should input text and update message on button click', async () => {
    const inputHarness = await loader.getHarness(MatInputHarness);
    const buttonHarness = await loader.getHarness(MatButtonHarness);

    await inputHarness.setValue('Alice');
    expect(await inputHarness.getValue()).toBe('Alice');

    await buttonHarness.click();

    fixture.detectChanges();
    const messageElement = fixture.nativeElement.querySelector('p');
    expect(messageElement.textContent).toContain('Hello, Alice!');
  });
});
