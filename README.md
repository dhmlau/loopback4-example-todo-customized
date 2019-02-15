# LoopBack 4 Quick Tips

_The sample snippets shown in this repo is being used with Postgresql database, but it should work similarly with other databases._

## Customizing LoopBack 4 models to map with the database

### If I have a table name or column name that is different from the model name and property, what should I change?

The model name generally maps to the table name. You can make the model associate with a different table name by specifying it in the `@model` decorator `settings` property.

```
@model({
  settings: {
    postgresql: {
      table: 'TODO_123',
    },
  },
})
export class Todo extends Entity {
```

Similarly for column name.

```
  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'TODO_TITLE',
    },
  })
  title: string;
```

See `models\todo.model.ts`.

## How to auto-generate the ids?

You can use the `generated: true` settings. Make sure that the id field is not an optional variable.

```
@property({
    type: 'string',
    id: true,
    generated: true,
  })
  custid: string;
```

See `models\customer.model.ts`.

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)
