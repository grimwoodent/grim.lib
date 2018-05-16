# Define

@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

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

# UID generators

## Examples

### Queue

Generate number UIDs from 1

``` JavaScript
import { UID } from 'grim.lib';

const queue = new UID.Queue();

const first = queue.next; // 1
const second = queue.getNext(); // 2
```

### Generator

Generate string UIDs (16 numbers or letters)

``` JavaScript
import { UID } from 'grim.lib';

const generator = new UID.Generator();

const uid = generator.generate(); // 9b2534ff20dab52f5dfdc3c88547e0bb
```

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
