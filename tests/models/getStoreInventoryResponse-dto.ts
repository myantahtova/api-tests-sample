import { IsNumber } from 'class-validator';

export class GetStoreInventoryResponse {
  @IsNumber()
  public readonly sold!: number;

  @IsNumber()
  public readonly string!: number;

  @IsNumber()
  public readonly unavailable!: number;

  @IsNumber()
  public readonly pending!: number;

  @IsNumber()
  public readonly available!: number;
}
