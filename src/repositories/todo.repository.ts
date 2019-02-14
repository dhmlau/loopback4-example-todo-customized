import {DefaultCrudRepository} from '@loopback/repository';
import {Todo} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TodoRepository extends DefaultCrudRepository<
  Todo,
  typeof Todo.prototype.id
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Todo, dataSource);
  }
}
