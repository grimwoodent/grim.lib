# Define

@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

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