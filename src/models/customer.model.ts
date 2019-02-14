import {Entity, model, property} from '@loopback/repository';

@model()
export class Customer extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  custid: string;

  @property({
    type: 'string',
    required: true,
  })
  custname: string;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}
