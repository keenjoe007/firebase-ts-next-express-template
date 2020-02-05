#### Set up:

Set up firebase:

- install Firebase Tools: `npm i -g firebase-tools`
- install yarn: `npm i -g yarn`
- create a project through the [firebase web console](https://console.firebase.google.com/)
- grab the projects ID from the web consoles URL: https://console.firebase.google.com/project/<projectId>
- update the `.firebaserc` default project ID to the newly created project
- login to the Firebase CLI tool with `firebase login`

#### Install project:

```bash
yarn
```

#### Run Firebase locally for testing:

```
yarn serve
```

#### Deploy it to the cloud with Firebase:

```bash
yarn deploy
```

#### Clean dist folder

```bash
yarn clean
```
