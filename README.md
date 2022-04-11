A new version of the Share Modal with additional functionality is now available.
- [Lit Share Modal v2 on GitHub](https://github.com/LIT-Protocol/lit-share-modal-v2)
- [Lit Share Modal v2 on NPM](https://www.npmjs.com/package/lit-share-modal)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

# Lit Access Control Conditions Modal

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

This React package provides a modal for the use with Lit Protocol that lets the user choose the access control conditions under which to share content or data.

![Screenshot](https://github.com/LIT-Protocol/lit-access-control-conditions-modal/raw/main/assets/screenshot.png)

# Example

You can find an example implementation of this modal in the [lit-access-control-conditions-modal-example](https://github.com/LIT-Protocol/lit-access-control-conditions-modal-example) repository.

# Installation

`yarn add lit-access-control-conditions-modal`

Note: This project requires a few peer dependencies so make sure you install them in your main project:

- react
- lit-js-sdk

# Usage

`import { ShareModal } from 'lit-access-control-conditions-modal'`

```
<ShareModal
          onClose={() => closeShareModal()}
          sharingItems={selectedFiles}
          onAccessControlConditionsSelected={onAccessControlConditionsSelected}
          getSharingLink={getSharingLink}
          showStep={shareModalStep}
        />
```

# Props

- onClose: Pass a function. This will be called when the user clicks the "X" button on the modal
- sharingItems: An array of items being shared. Each item should have a "name" property.
- onAccessControlConditionsSelected: Pass a function. This will be called when the user has selected their access control requirements.
- getSharingLink: Pass a fuction. This will be used when the user clicks the "Copy share link" button. This function should return a string that is the url to be shared. This function will be called with the sharingItems[0] as a parameter. It is only used when sharingItems.length == 1
- showStep: Optional. Pass a string. If you'd like to force the modal into a specific step, you can use this function. It will immediately show this step when opened. The options you can choose from are the keys in src/ShareModal.jsx in the ModalComponents variable. I use this because when a user picks their access control conditions, and onAccessControlConditionsSelected is called, I close this modal, and open a "file upload progress" modal. When the upload is complete, I show this modal again, but I set showStep to "accessCreated" so the user sees the page that lets them copy the share link.
