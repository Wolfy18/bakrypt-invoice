import { ITransaction, AccessToken } from './types.js';

declare function BakryptInvoice(
  this: any,
  {
    transaction,
    collection,
    accessToken,
    testnet,
  }: {
    transaction: ITransaction | undefined;
    collection: [] | undefined;
    accessToken: AccessToken | undefined;
    testnet: string;
  }
): import('lit-html').TemplateResult<1>;
export default BakryptInvoice;
