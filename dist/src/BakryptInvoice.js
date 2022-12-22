import { html, css } from 'lit';
import { useEffect } from 'haunted';
import shoeStyles from '@shoelace-style/shoelace/dist/themes/light.styles.js';
import { useStyles } from './hooks/useStyles.js';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import SlTextarea from '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import SlDivider from '@shoelace-style/shoelace/dist/components/divider/divider.js';
import SlDetails from '@shoelace-style/shoelace/dist/components/details/details.js';
import SlQrCode from '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js';
import SlBadge from '@shoelace-style/shoelace/dist/components/badge/badge.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
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
function BakryptInvoice({ transaction = undefined, collection = undefined, }) {
    const transactionVariants = {
        error: 'danger',
        rejected: 'danger',
        canceled: 'danger',
        burning: 'warning',
        royalties: 'warning',
        refund: 'warning',
        confirmed: 'success',
        'stand-by': 'success',
        waiting: 'primary',
        preauth: 'primary',
    };
    useStyles(this, [
        shoeStyles,
        css `
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
    const notify = (message, type) => {
        const event = new CustomEvent('notification', {
            bubbles: true,
            composed: true,
            detail: [message, type],
        });
        this.dispatchEvent(event);
    };
    const retry = () => {
        const event = new CustomEvent('retryTransaction', {
            bubbles: true,
            composed: true,
            detail: { tx: transaction },
        });
        this.dispatchEvent(event);
    };
    const refund = () => {
        const event = new CustomEvent('refundTransaction', {
            bubbles: true,
            composed: true,
            detail: { tx: transaction },
        });
        this.dispatchEvent(event);
    };
    useEffect(() => { }, [transaction, collection]);
    return html `
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
          value=${transaction ? transaction.policy_id : ''}
          type="text"
          readonly
          filled
        ></sl-input>

        <div
          style="display:grid; grid-template-columns: repeat(auto-fit, minmax(305px, 1fr)); grid-gap: 0.5rem; align-items:center; margin-bottom: 2rem"
        >
          <sl-details
            summary="Click here to show a QR Code and scan the deposit address."
          >
            <div style="text-align:center">
              <sl-qr-code
                value=${transaction
        ? transaction.deposit_address
        : 'Not found'}
                label="Scan this code for the deposit_address!"
              ></sl-qr-code>
            </div>
          </sl-details>
          <sl-alert variant="warning" open>
            <strong>DO NOT TRANSFER FUNDS FROM AN EXCHANGE!</strong> <br />
            We will send all tokens and change to the payor's address; meaning
            that the payment must be done from a wallet that you can control and
            its capable of manage native tokens on Cardano like
            <a target="_blank" rel="nofollow" href="https://namiwallet.io/"
              >Nami</a
            >,
            <a target="_blank" rel="nofollow" href="https://flint-wallet.com/"
              >Flint</a
            >,
            <a
              target="_blank"
              rel="nofollow"
              href="https://yoroi-wallet.com/#/"
            >
              Yoroi</a
            >,
            <a target="_blank" rel="nofollow" href="https://daedaluswallet.io/"
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
        </div>

        <h4 style="color: var(--sl-color-warning-600);">
          Payment Type: ${transaction ? transaction.type : null}
        </h4>
        ${transaction && transaction.status !== 'confirmed'
        ? html ` <sl-input
              maxlength="255"
              type="number"
              label="Processing Cost"
              value=${transaction ? transaction.cost : ''}
              readonly
              filled
            ></sl-input>`
        : html ` <sl-input
              maxlength="255"
              type="number"
              label="Cost"
              value=${transaction ? transaction.cost : ''}
              readonly
              filled
            ></sl-input>`}
        ${transaction && transaction.status !== 'confirmed'
        ? html ` <small style="float:right">Click to copy</small
              ><sl-input
                maxlength="255"
                label="Deposit Address"
                value=${transaction
            ? transaction.deposit_address
            : ''}
                type="password"
                readonly
                filled
                toggle-password
                @click=${(e) => {
            if (e.currentTarget && e.currentTarget.value.length > 0) {
                const depAddr = e.currentTarget.value;
                navigator.clipboard.writeText(depAddr);
                notify('Copy to clipboard!', 'success');
            }
            else if (e.path && e.path.length > 0) {
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
          value=${transaction ? transaction.uuid : ''}
          type="text"
          readonly
          filled
        ></sl-input>
        <sl-input
          maxlength="255"
          label="Created on"
          value=${transaction
        ? new Date(transaction.created_on).toUTCString()
        : ''}
          type="text"
          readonly
          filled
        ></sl-input>
        <sl-input
          maxlength="255"
          label="Expires on"
          value=${transaction
        ? new Date(transaction.expires_on).toUTCString()
        : ''}
          type="text"
          readonly
          filled
        ></sl-input>
        <sl-input
          maxlength="255"
          label="Conv. Fees"
          value=${transaction
        ? transaction.convenience_fee
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
        ? transaction.status_description
        : ''}
            readonly
            filled
          >
          </sl-textarea>
          <sl-badge
            style="margin-bottom: 2rem; display: grid"
            .pulse=${true}
            variant=${transaction && transaction.status
        ? transactionVariants[transaction.status]
        : 'neutral'}
            >${transaction ? transaction.status : ''}</sl-badge
          >
          <p>
            Please do not refresh the page, otherwise this session will be
            restarted.
          </p>

          <sl-divider></sl-divider>
          <h4>Minting Summary</h4>
          <p>
            <small
              ><i
                >You must send the minimum amount of ADA shown above. Any change
                will be returned automatically to the payor's wallet.</i
              ></small
            ><br /><br />
            <small><i>**Tokens are returned to the payor's wallet.</i></small>
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
                  ${collection ? (collection.length * 1.95).toFixed(2) : null}
                </td>
              </tr>

              <tr>
                <td>
                  <p>** Surety Bond.</p>
                </td>
                <td>1</td>
                <td>
                  ${transaction ? transaction.surety_bond : ''}
                </td>
                <td>
                  ${transaction ? transaction.surety_bond : ''}
                </td>
              </tr>
              ${transaction && transaction.has_royalties
        ? html `<tr>
                      <td>
                        <p>Royalties Bond.**<br /></p>
                      </td>
                      <td>1</td>
                      <td>
                        ${transaction
            ? transaction.royalties_estimated_cost
            : ''}
                      </td>
                      <td>
                        ${transaction
            ? transaction.royalties_estimated_cost
            : ''}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p><strong>Royalties Blockchain Fee</strong></p>
                      </td>
                      <td>1</td>
                      <td>
                        ${transaction
            ? transaction.blockchain_fee
            : ''}
                      </td>
                      <td>
                        ${transaction
            ? transaction.blockchain_fee
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
                  ${transaction
        ? transaction.convenience_fee
        : ''}
                </td>
                <td>
                  ${transaction
        ? transaction.convenience_fee
        : ''}
                </td>
              </tr>

              <tr>
                <td>
                  <p><strong>Blockchain Fee</strong></p>
                </td>
                <td>2</td>
                <td>
                  ${transaction
        ? transaction.blockchain_fee
        : ''}
                </td>
                <td>
                  ${transaction
        ? Number(transaction.blockchain_fee) * 2
        : ''}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <sl-divider></sl-divider>
      <div>
        ${transaction &&
        transaction.status &&
        ['rejected', 'error'].includes(transaction.status)
        ? html `
              <sl-button
                variant="primary"
                style="margin-right:1rem"
                @click=${retry}
                >Retry</sl-button
              >
            `
        : null}
        ${transaction &&
        transaction.status &&
        transaction.status !== 'confirmed'
        ? html `
              <sl-button
                variant="warning"
                outline
                @click=${() => {
            if (confirm('Would you like to refund the transaction?')) {
                refund();
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
//# sourceMappingURL=BakryptInvoice.js.map