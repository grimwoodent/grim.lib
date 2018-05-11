# Define

@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

### Default variable

``` JavaScript
Define.property(object, propertyName, property).var();
```

### Readonly variable

writable
true if and only if the value associated with the property may be changed with an assignment operator.
**Defaults to false**.

``` JavaScript
Define.property(object, propertyName, property).readonly().var();
```

### Hidden variable

true if and only if this property shows up during enumeration of the properties on the corresponding object.
**Defaults to false**.

``` JavaScript
Define.property(object, propertyName, property).hidden().var();
```

### Final variable

true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
**Defaults to false**.

``` JavaScript
Define.property(object, propertyName, property).final().var();
```

# Callbacks

Create callbacks storage object

``` JavaScript
const events = new Callbacks({
    doSomething: (...someArgs) => {
        ...some stuff
    },
});

events.trigger('doSomething', ...someArgs);
```
