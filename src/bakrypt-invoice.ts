import { component } from 'haunted';
import BakryptInvoice from './BakryptInvoice.js';

customElements.define(
  'bakrypt-invoice',
  component(BakryptInvoice, {
    observedAttributes: ['transaction', 'collection', 'transactionVariant'],
  })
);
