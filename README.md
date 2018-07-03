# Define

@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

## Methods

### Define

#### static property(object: any, name: string, value: any): Property

Create new configurator for property.

``` JavaScript
Define.property(object, propertyName, property);
```

#### static undef(obj: any, name: string): any

Delete propery from object. Returns object.

``` JavaScript
Define.undef(object, propertyName);
```

### Property

#### readonly(): Property

Make this property readonly (writable = false);

#### hidden(): Property

Make property hidden in inspector (enumerable = false);

#### final(): Property

Make property final (configurable = false);

#### var(): any

Define property as variable.

#### getter(): any

Define property as getter. Value must be an function.

#### setter(): any

Define property as setter. Value must be an function.

## Examples

### Default variable

``` JavaScript
import { Define } from 'grim.lib';

Define.property(object, propertyName, property).var();
```

### Readonly variable

writable
true if and only if the value associated with the property may be changed with an assignment operator.
**Defaults to false**.

``` JavaScript
import { Define } from 'grim.lib';

Define.property(object, propertyName, property).readonly().var();
```

### Hidden variable

true if and only if this property shows up during enumeration of the properties on the corresponding object.
**Defaults to false**.

``` JavaScript
import { Define } from 'grim.lib';

Define.property(object, propertyName, property).hidden().var();
```

### Final variable

true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
**Defaults to false**.

``` JavaScript
import { Define } from 'grim.lib';

Define.property(object, propertyName, property).final().var();
```

### Undefine property

``` JavaScript
import { Define } from 'grim.lib';

Define.undef(object, propertyName);
```

# Callbacks

## Examples

Create callbacks storage object

``` JavaScript
import { Callbacks } from 'grim.lib';

const events = new Callbacks({
    doSomething: (...someArgs) => {
        ...some stuff
    },
});

events.trigger('doSomething', ...someArgs);
```

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| set(event: *\<object\>*) | *\<this\>* | Add new callbacks by object { \[key\]: function } or { \[key\]: array of functions } |
| get(key: *\<string\>*) | *\<function \| array\>* | Return function or array of functions |
| remove(event: *\<object\>*) | *\<this\>* | Removes method or array of methods|
| has(key: *\<string\>*) | *\<boolean\>* | Return is callbacks exist for key |
| trigger(key: *\<string\>*, ...args: *\<any\>*) | *\<any\>* | Trigger callbacks by key |

# UID generators

@see [UIDs Readme](https://github.com/grimwoodent/grim.uid#readme)

# Collections

## Constructor

### Methods

#### replaceAllIn(key: string, elements: any[]): ICollections;

Replace all items in the collection with a new set of items.

``` JavaScript
collection.replaceAllIn('defaults', [1, 2, 3]);
```

#### addTo(key: string, element: any): ICollections;

Add new element to collection.

``` JavaScript
collection.addTo('defaults', 1);
```

#### removeFrom(key: string, element: any): ICollections;

Remove element from collection.

``` JavaScript
collection.removeFrom('defaults', 1);
```

#### hasIn(key: string, element: any): boolean;

Checks for the presence of an element in the collection.

``` JavaScript
collection.hasIn('defaults', 1);
```

#### clear(key: string): ICollections;

Clear collection.

``` JavaScript
collection.clear('defaults');
```

#### getAllFrom(key: string): any[];

Get all elements from collection.

``` JavaScript
collection.getAllFrom('defaults');
```

#### isEmpty(key: string): boolean;

Check is collection is empty.

``` JavaScript
collection.isEmpty('defaults');
```

#### keys(): string[];

Get all keys of collections.

``` JavaScript
collection.keys();
```

#### addStrategy(key: string, strategy: IStrategy): ICollections;

Add new strategy to collection.

``` JavaScript
collection.addStrategy('defaults', strategy);
```

#### removeStrategy(key: string): ICollections;

Remove strategy from collection.

``` JavaScript
collection.removeStrategy('defaults');
```

## Strategy

### Methods

#### getIndex(collection: any[], element: any): number;

Get index of element in array.

``` JavaScript
strategy.getIndex(collection, 1);
```

#### has(collection: any[], element: any): boolean;

Checks for the presence of an element in the array.

``` JavaScript
strategy.has(collection, 1);
```

#### add(collection: any[], element: any): any[];

Add element to array.

``` JavaScript
strategy.add(collection, 1);
```

#### remove(collection: any[], element: any): any[];

Remove element from array.

``` JavaScript
strategy.remove(collection, 1);
```

## Examples

### Create new collection storage

The default strategy uses the condition "a === b" to find the item.

``` JavaScript
import { Collection } from 'grim.lib';

const collection = new Collection.Constructor({
    storageKey: new Collection.Strategy();
});
```

### Extends Strategy

``` JavaScript
import { Collection } from 'grim.lib';

class NewStrategy extends Collection.Strategy {
    getIndex(collection, element) {
        return collection.findIndex((collectionElement) => collectionElement.value === element.value);
    }
}
```
