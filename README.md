# nostr-wallet


## WARNING AND RISK

### WIP

This software should be considered experimental and for educational purpose, use at your
own risk.

All the standard practices for cryptocurrency wallets apply: Make sure you take
backup of your secret recovery phrase. I am not responsible for any mistakes or
problems with the software. You hold your own keys, I can never
restore or help you if you lose your secret recovery phrase. You can still lose
valuables even though you don't lose your recovery phrase, due to bugs and
issues in the software provided. Use at your own risk.

## Development

For development with automatic reloading:

```sh
yarn dev
```

Open the [Extensions Dashboard](chrome://extensions), enable "Developer mode",
click "Load unpacked", and choose the `dist` folder.

When you make changes in `src` the background script and any content script will
reload automatically.

## Production

When it's time to publish your Chrome extension, make a production build to
submit to the Chrome Web Store. This boilerplate will use the version in
`package.json`, unless you add a version to `src/manifest.json`.

> Make sure you have updated the name and version of your extension in
> `package.json`.

Run the following line:

```sh
yarn build
```
