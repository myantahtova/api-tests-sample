import { test, expect } from '@playwright/test';
import { plainToInstance } from 'class-transformer';
import { GetStoreInventoryResponse } from './models/getStoreInventoryResponse-dto';
import { validateOrReject } from 'class-validator';

test('Validate Response Schema', async ({ request }) => {
  const response = await request.get(
    'https://petstore.swagger.io/v2/store/inventory'
  );

  const responseJson = await response.json();
  expect(responseJson).toHaveProperty('available');

  const convertedToInstance = plainToInstance(
    GetStoreInventoryResponse,
    responseJson
  );

  validateOrReject(convertedToInstance);
});
