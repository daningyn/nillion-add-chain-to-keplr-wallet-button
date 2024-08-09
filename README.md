# Add NilChain Button to Keplr Wallet

## Overview

This project provides a Next component that allows users to add a NilChain to their Keplr wallet. Keplr is a popular wallet for the Cosmos ecosystem, and this component facilitates seamless integration of Nillion into users' wallets.

## Example Live:

You can check out the live example at: [Live example](https://add-nilchain-example.daningyn.xyz/)

The library is on NPM: [NPM package](https://www.npmjs.com/package/add-nilchain-to-keplr-button)

## Features

- **Add NilChain to Keplr:** Integrate a custom blockchain into Keplr.
- **User-Friendly Interface:** Simple button component to handle the chain addition.
- **Open Source:** Contribute to the project or customize it for your needs.
- **For Developers:** Can easily to customize the button with class and style attributes

## Usage

To use this component into your project, please follow these step:

1. **Install via npm**

    ```bash
    npm install add-nilchain-to-keplr-button --save
    ```

2. **Import**

    ```
    import { AddNillionNetworkButton } from 'add-nilchain-to-keplr-button';
    import 'add-nilchain-to-keplr-button/dist/styles.css';
    ```

3. **Usage**

    ```bash
    <AddNillionNetworkButton
        addChainSuccess={async (message) => {}}
        addChainFail={async (error) => {}}
        buttonTitle=""
        className={}
        style={}
    >

    </AddNillionNetworkButton>
    ```

4. **Refer Props**:

    ```bash
    type AddToChainButtonProps = {
        addChainSuccess: (message: string) => void;
        addChainFail: (error: string) => void;
        style?: React.CSSProperties;
        className?: string;
        buttonTitle?: string;
    };
    ```
    

## Installation Example

To run this example, follow these steps:

- The app requires ^Node 20

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/daningyn/nillion-add-chain-to-keplr-wallet-button.git
    cd nillion-add-chain-to-keplr-wallet-button
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the example:**

    ```bash
    npm run dev
    ```

    The example will run on `http://localhost:3000`


## License

This project is licensed under the MIT License - see the [MIT](https://choosealicense.com/licenses/mit/) file for details.

MIT License

Copyright (c) 2024 daningyn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact

For any questions or issues, please open an issue on the GitHub repository or contact us via email at `daningyn@t4e.xyz`.

Thank you for using and contributing to the NilChain Add Button for Keplr Wallet!