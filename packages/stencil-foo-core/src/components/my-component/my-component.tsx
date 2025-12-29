import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { format } from '../../utils/utils';

export type MyType = {
  foo: string;
};

export type MyType2 = {
  children: Array<MyType>;
};

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  // primitives or nullish
  @Event() myAnyEvent: EventEmitter;
  @Event() myStringEvent: EventEmitter<string>;
  @Event() myNumberEvent: EventEmitter<number>;
  @Event() myBooleanEvent: EventEmitter<boolean>;
  @Event() myUnknownEvent: EventEmitter<unknown>;
  @Event() myVoidEvent: EventEmitter<void>;
  @Event() myUndefinedEvent: EventEmitter<undefined>;
  @Event() myNullEvent: EventEmitter<null>;

  // plain object
  @Event() myObjectEvent: EventEmitter<{ foo: string }>;

  // typed or complex objects
  @Event() myDateEvent: EventEmitter<Date>;
  @Event() myNestedDateEvent: EventEmitter<{ date: Date }>;
  @Event() myTypeEvent: EventEmitter<MyType>;
  @Event() myType2Event: EventEmitter<MyType2>;

  // arrays
  @Event() myArrayEvent: EventEmitter<Array<string>>;
  @Event() myArrayEvent2: EventEmitter<string[]>;



  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private handleClick() {
    this.myDateEvent.emit(new Date());
    this.myStringEvent.emit('foo');
    this.myNumberEvent.emit(123);
    this.myBooleanEvent.emit(true);
    this.myAnyEvent.emit({ foo: 'bar' });
    this.myUnknownEvent.emit({ foo: 'bar' });
    this.myVoidEvent.emit();
    this.myUndefinedEvent.emit();
    this.myNullEvent.emit();
    this.myObjectEvent.emit({ foo: 'bar' });
    this.myDateEvent.emit(new Date());
    this.myNestedDateEvent.emit({ date: new Date() });
    this.myTypeEvent.emit({ foo: 'bar' });
    this.myType2Event.emit({ children: [{ foo: 'bar' }] });
    this.myArrayEvent.emit(['foo', 'bar']);
    this.myArrayEvent2.emit(['foo', 'bar']);
  }

  render() {
    return <div onClick={this.handleClick}>Hello, World! I'm {this.getText()}</div>;
  }
}
