import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {
      table: 'TODO_123',
    },
  },
})
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'TODO_TITLE',
    },
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  desc: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
