import { html, css } from 'lit';
import { useEffect, useState } from 'haunted';
import shoeStyles from '@shoelace-style/shoelace/dist/themes/light.styles.js';

import SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import SlTextarea from '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import SlDivider from '@shoelace-style/shoelace/dist/components/divider/divider.js';
import SlDetails from '@shoelace-style/shoelace/dist/components/details/details.js';
import SlQrCode from '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js';
import SlBadge from '@shoelace-style/shoelace/dist/components/badge/badge.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
import { ITransaction, ErrorResponse, AccessToken } from './types.js';
import { useStyles } from './hooks/useStyles.js';

if (!customElements.get('sl-input')) {
  customElements.define('sl-input', SlInput);
}

if (!customElements.get('sl-textarea')) {
  customElements.define('sl-textarea', SlTextarea);
}

if (!customElements.get('sl-divider')) {
  customElements.define('sl-divider', SlDivider);
}

if (!customElements.get('sl-details')) {
  customElements.define('sl-details', SlDetails);
}

if (!customElements.get('sl-alert')) {
  customElements.define('sl-alert', SlAlert);
}

if (!customElements.get('sl-badge')) {
  customElements.define('sl-badge', SlBadge);
}

if (!customElements.get('sl-button')) {
  customElements.define('sl-button', SlButton);
}

if (!customElements.get('sl-qr-code')) {
  customElements.define('sl-qr-code', SlQrCode);
}

function BakryptInvoice(
  this: any,
  {
    transaction = undefined,
    collection = undefined,
    accessToken = undefined,
    csrfToken = undefined,
    testnet,
  }: // open = false,
  {
    transaction: ITransaction | undefined;
    collection: [] | undefined;
    accessToken: AccessToken | undefined;
    testnet: string;
    csrfToken: string | undefined;
    // open: boolean;
  }
) {
  const bakryptURI = testnet
    ? 'https://testnet.bakrypt.io'
    : 'https://bakrypt.io';

  const transactionVariants: { [key: string]: string } = {
    error: 'danger',
    rejected: 'danger',
    canceled: 'danger',
    burning: 'warning',
    royalties: 'warning',
    processing: 'warning',
    refund: 'warning',
    confirmed: 'success',
    'stand-by': 'success',
    waiting: 'primary',
    preauth: 'primary',
  };

  const [transactionObj, setTransaction] = useState<ITransaction>();
  const [requestLoading, setRequestLoading] = useState(false);

  useStyles(this, [
    shoeStyles,
    css`
      :host {
        font-family: 'arial';
        font-weight: 400;
      }

      :host sl-input,
      :host input,
      :host sl-textarea,
      :host sl-details {
        margin-bottom: 2rem;
      }

      :host .form-control__help-text {
        margin-top: 0.5rem;
      }
    `,
  ]);

  const notify = (message: string, type: string) => {
    const event = new CustomEvent('notification', {
      bubbles: true,
      composed: true,
      detail: [message, type],
    });

    this.dispatchEvent(event);
  };

  // const retry = () => {
  //   const event = new CustomEvent('retryTransaction', {
  //     bubbles: true,
  //     composed: true,
  //     detail: { tx: transaction },
  //   });

  //   this.dispatchEvent(event);
  // };

  // const refund = () => {
  //   const event = new CustomEvent('refundTransaction', {
  //     bubbles: true,
  //     composed: true,
  //     detail: { tx: transaction },
  //   });

  //   this.dispatchEvent(event);
  // };

  // Retrieve transaction information
  const retrieveTransaction = async (uuid: string) => {
    let tx;

    try {
      const requestHeaders: any = {
        'content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      // if (csrfToken && csrfToken.length > 0) {
      //   requestHeaders['X-CSRFToken'] = csrfToken;
      // }

      const retrieveTransactionRequest = await fetch(
        `${bakryptURI}/v1/transactions/${uuid}/`,
        {
          method: 'GET',
          headers: requestHeaders,
        }
      );

      if (retrieveTransactionRequest.ok) {
        const jsonResponse: ITransaction =
          await retrieveTransactionRequest.json();
        setTransaction(jsonResponse);
        tx = jsonResponse;

        // Repeat call every 15 seconds
        setTimeout(() => {
          retrieveTransaction(uuid);
        }, 10000);
      } else {
        const jsonResponse: ErrorResponse =
          await retrieveTransactionRequest.json();
        if (jsonResponse.error_description)
          notify(jsonResponse.error_description, 'danger');
        else if (jsonResponse.error) notify(jsonResponse.error, 'danger');
        else if (jsonResponse.detail) notify(jsonResponse.detail, 'danger');
      }
    } catch (error) {
      // console.log(error);
      notify('Unable to retrieve transaction.', 'danger');
    }

    return tx;
  };

  // Submit collection to the assets API
  const submitRetry = async (Tx: ITransaction) => {
    try {
      const requestHeaders: any = {
        'content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      if (csrfToken && csrfToken.length > 0) {
        requestHeaders['X-CSRFToken'] = csrfToken;
      }

      const submitRetryRequest = await fetch(
        `${bakryptURI}/v1/transactions/${Tx.uuid}/mint/`,
        {
          method: 'POST',
          headers: requestHeaders,
        }
      );

      if (submitRetryRequest.ok) {
        await submitRetryRequest.json();

        notify('Request was submitted', 'success');
        // console.log(jsonResponse);
      } else {
        const jsonResponse: ErrorResponse = await submitRetryRequest.json();
        if (jsonResponse.error_description)
          notify(jsonResponse.error_description, 'danger');
        else if (jsonResponse.error) notify(jsonResponse.error, 'danger');
        else if (jsonResponse.detail) notify(jsonResponse.detail, 'danger');
      }
    } catch (error) {
      notify(`Unable to submit request. Error: ${error}`, 'danger');
    }
  };

  // Submit collection to the assets API
  const submitRefund = async (Tx: ITransaction) => {
    setRequestLoading(true);

    try {
      const requestHeaders: any = {
        'content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      if (csrfToken && csrfToken.length > 0) {
        requestHeaders['X-CSRFToken'] = csrfToken;
      }

      const submitRefundRequest = await fetch(
        `${bakryptURI}/v1/transactions/${Tx.uuid}/refund/`,
        {
          method: 'POST',
          headers: requestHeaders,
        }
      );

      if (submitRefundRequest.ok) {
        await submitRefundRequest.json();
        notify('Refund was submitted', 'success');
        // console.log(jsonResponse);
      } else {
        const jsonResponse: ErrorResponse = await submitRefundRequest.json();
        if (jsonResponse.error_description)
          notify(jsonResponse.error_description, 'danger');
        else if (jsonResponse.error) notify(jsonResponse.error, 'danger');
        else if (jsonResponse.detail) notify(jsonResponse.detail, 'danger');
      }
    } catch (error) {
      notify(`Unable to refund request. Error: ${error}`, 'danger');
    }
    setRequestLoading(false);
  };

  useEffect(() => {
    if (transaction) {
      setTransaction(transaction);
      if (accessToken) retrieveTransaction(transaction.uuid);
    }
  }, [transaction, collection]);

  return html`
    <!-- Spinner loader overlay -->
    ${requestLoading
      ? html`
          <sl-spinner
            style="position:absolute; right: 2rem; --track-width: 5px; font-size: 1.5rem"
          ></sl-spinner>
        `
      : null}
    ${requestLoading
      ? html` <div part="overlay" class="dialog__overlay" tabindex="-1"></div> `
      : null}
    <!-- Transaction Dialog -->
    <div style="padding: 1rem">
      <div
        style="
      "
      >
        <small style="float:right"><i>Unique Identifier</i></small>
        <sl-input
          maxlength="255"
          label="Policy ID"
          value=${transactionObj
            ? (<ITransaction>transactionObj).policy_id
            : ''}
          type="text"
          readonly
          filled
        ></sl-input>

        ${transactionObj &&
        !['confirmed', 'canceled'].includes(
          (<ITransaction>transactionObj).status
        )
          ? html` <div
              style="display:grid; grid-template-columns: repeat(auto-fit, minmax(305px, 1fr)); grid-gap: 0.5rem; align-items:center; margin-bottom: 2rem"
            >
              <sl-details
                summary="Click here to show a QR Code and scan the deposit address."
              >
                <div style="text-align:center">
                  <sl-qr-code
                    value=${transactionObj
                      ? (<ITransaction>transactionObj).deposit_address
                      : 'Not found'}
                    label="Scan this code for the deposit_address!"
                  ></sl-qr-code>
                </div>
              </sl-details>
              <sl-alert variant="warning" open>
                <strong>DO NOT TRANSFER FUNDS FROM AN EXCHANGE!</strong> <br />
                We will send all tokens and change to the payor's address;
                meaning that the payment must be done from a wallet that you can
                control and its capable of manage native tokens on Cardano like
                <a target="_blank" rel="nofollow" href="https://namiwallet.io/"
                  >Nami</a
                >,
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://flint-wallet.com/"
                  >Flint</a
                >,
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://yoroi-wallet.com/#/"
                >
                  Yoroi</a
                >,
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://daedaluswallet.io/"
                  >Daedalus</a
                >
                or
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://ccvault.io/app/mainnet/welcome"
                  >Eternl</a
                >
              </sl-alert>
            </div>`
          : null}

        <h4 style="color: var(--sl-color-warning-600);">
          Payment Type:
          ${transactionObj ? (<ITransaction>transactionObj).type : null}
        </h4>
        ${transactionObj &&
        !['confirmed', 'canceled'].includes(
          (<ITransaction>transactionObj).status
        )
          ? html` <sl-input
              maxlength="255"
              type="number"
              label="Processing Cost"
              value=${transactionObj ? (<ITransaction>transactionObj).cost : ''}
              readonly
              filled
            ></sl-input>`
          : html` <sl-input
              maxlength="255"
              type="number"
              label="Min. Processing Cost"
              value=${transactionObj ? (<ITransaction>transactionObj).cost : ''}
              readonly
              filled
            ></sl-input>`}
        ${transactionObj &&
        !['confirmed', 'canceled'].includes(
          (<ITransaction>transactionObj).status
        )
          ? html` <small style="float:right">Click to copy</small
              ><sl-input
                maxlength="255"
                label="Deposit Address"
                value=${transactionObj
                  ? (<ITransaction>transactionObj).deposit_address
                  : ''}
                type="password"
                readonly
                filled
                toggle-password
                @click=${(e: any) => {
                  if (e.currentTarget && e.currentTarget.value.length > 0) {
                    const depAddr = e.currentTarget.value;
                    navigator.clipboard.writeText(depAddr);
                    notify('Copy to clipboard!', 'success');
                  } else if (e.path && e.path.length > 0) {
                    const depAddr = e.path[0].value;
                    navigator.clipboard.writeText(depAddr);
                    notify('Copy to clipboard!', 'success');
                  }
                  return false;
                }}
              ></sl-input>`
          : null}
        <sl-input
          maxlength="255"
          label="Transaction UUID"
          value=${transactionObj ? (<ITransaction>transactionObj).uuid : ''}
          type="text"
          readonly
          filled
        ></sl-input>
        <sl-input
          maxlength="255"
          label="Created on"
          value=${transactionObj
            ? new Date((<ITransaction>transactionObj).created_on).toUTCString()
            : ''}
          type="text"
          readonly
          filled
        ></sl-input>
        <sl-input
          maxlength="255"
          label="Expires on"
          value=${transactionObj
            ? new Date((<ITransaction>transactionObj).expires_on).toUTCString()
            : ''}
          type="text"
          readonly
          filled
        ></sl-input>
        <sl-input
          maxlength="255"
          label="Conv. Fees"
          value=${transactionObj
            ? (<ITransaction>transactionObj).convenience_fee
            : ''}
          type="text"
          readonly
          filled
        ></sl-input>

        <sl-alert variant="warning" open>
          Remember, to complete your transaction, your payment must be received
          before the expiration time shown above. Late payments can be refunded.
          Minted assets are non-refundable and non-transferable. All times shown
          are UTC (Coordinated Universal Time).
        </sl-alert>
        <sl-divider></sl-divider>
        <div>
          <sl-textarea
            style="margin-bottom:1rem"
            label="The status refreshes every 10 seconds."
            value=${transaction
              ? (<ITransaction>transaction).status_description
              : ''}
            readonly
            filled
          >
          </sl-textarea>
          <sl-badge
            style="margin-bottom: 2rem; display: grid"
            .pulse=${true}
            variant=${transactionObj && (<ITransaction>transactionObj).status
              ? transactionVariants[<string>transactionObj.status]
              : 'neutral'}
            >${transactionObj
              ? (<ITransaction>transactionObj).status
              : ''}</sl-badge
          >
          <p>
            Please do not refresh the page, otherwise this session will be
            restarted.
          </p>

          <sl-divider></sl-divider>
          ${collection && collection.length
            ? html` <h4>Minting Summary</h4>
                <p>
                  <small
                    ><i
                      >You must send the minimum amount of ADA shown above. Any
                      change will be returned automatically to the payor's
                      wallet.</i
                    ></small
                  ><br /><br />
                  <small
                    ><i>**Tokens are returned to the payor's wallet.</i></small
                  >
                </p>

                <table style="text-align:left; width: 100%">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>** Bond per Asset.<br /></p>
                      </td>
                      <td>${collection ? collection.length : null}</td>
                      <td>1.95</td>
                      <td>
                        ${collection
                          ? (collection.length * 1.95).toFixed(2)
                          : null}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>** Surety Bond.</p>
                      </td>
                      <td>1</td>
                      <td>
                        ${transactionObj
                          ? (<ITransaction>transactionObj).surety_bond
                          : ''}
                      </td>
                      <td>
                        ${transactionObj
                          ? (<ITransaction>transactionObj).surety_bond
                          : ''}
                      </td>
                    </tr>
                    ${transactionObj &&
                    (<ITransaction>transactionObj).has_royalties
                      ? html`<tr>
                            <td>
                              <p>Royalties Bond.**<br /></p>
                            </td>
                            <td>1</td>
                            <td>
                              ${transactionObj
                                ? (<ITransaction>transactionObj)
                                    .royalties_estimated_cost
                                : ''}
                            </td>
                            <td>
                              ${transactionObj
                                ? (<ITransaction>transactionObj)
                                    .royalties_estimated_cost
                                : ''}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p><strong>Royalties Blockchain Fee</strong></p>
                            </td>
                            <td>1</td>
                            <td>
                              ${transactionObj
                                ? (<ITransaction>transactionObj).blockchain_fee
                                : ''}
                            </td>
                            <td>
                              ${transactionObj
                                ? (<ITransaction>transactionObj).blockchain_fee
                                : ''}
                            </td>
                          </tr>`
                      : null}
                    <tr>
                      <td>
                        <p><strong>Convenience Fee</strong></p>
                      </td>
                      <td>${collection ? collection.length : null}</td>
                      <td>
                        ${transactionObj
                          ? (<ITransaction>transactionObj).convenience_fee
                          : ''}
                      </td>
                      <td>
                        ${transactionObj
                          ? (<ITransaction>transactionObj).convenience_fee
                          : ''}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p><strong>Blockchain Fee</strong></p>
                      </td>
                      <td>2</td>
                      <td>
                        ${transactionObj
                          ? (<ITransaction>transactionObj).blockchain_fee
                          : ''}
                      </td>
                      <td>
                        ${transactionObj
                          ? Number(
                              (<ITransaction>transactionObj).blockchain_fee
                            ) * 2
                          : ''}
                      </td>
                    </tr>
                  </tbody>
                </table>`
            : null}
        </div>
      </div>
      <sl-divider></sl-divider>
      <div>
        ${transactionObj &&
        (<ITransaction>transactionObj).status &&
        ['rejected', 'error'].includes((<ITransaction>transactionObj).status)
          ? html`
              <sl-button
                variant="primary"
                style="margin-right:1rem"
                @click=${() => submitRetry(transactionObj)}
                >Retry</sl-button
              >
            `
          : null}
        ${transactionObj &&
        (<ITransaction>transactionObj).status &&
        !['confirmed', 'canceled'].includes(
          (<ITransaction>transactionObj).status
        )
          ? html`
              <sl-button
                variant="warning"
                outline
                @click=${() => {
                  if (
                    window.confirm('Would you like to refund the transaction?')
                  ) {
                    submitRefund(transactionObj);
                  }
                }}
                style=""
                >Submit Refund</sl-button
              >
            `
          : null}
      </div>
    </div>
  `;
}

export default BakryptInvoice;
