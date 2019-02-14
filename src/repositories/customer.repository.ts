import {DefaultCrudRepository} from '@loopback/repository';
import {Customer} from '../models';
import {DsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.custid
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Customer, dataSource);
  }
}
