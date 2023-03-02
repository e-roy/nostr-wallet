import React, { useState } from "react";

import { generatePrivateKey, getPublicKey } from "nostr-tools";

export const MainPage = () => {
  const [privateKey, setPrivateKey] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const handleGetPrivateKey = async () => {
    const pk = generatePrivateKey(); // generate private key
    setPrivateKey(pk);
    const pubKey = getPublicKey(pk); // get public key
    setPublicKey(pubKey);
  };

  return (
    <div>
      <header className={``}>
        <h1 className={`text-lg font-medium text-gray-500 text-center`}>
          nostr-wallet
        </h1>
      </header>
      <div className={`h-96`}>
        <p className={`text-sm font-medium`}>private key:</p>
        <p className={`text-sm text-gray-500 break-all`}>{privateKey}</p>
        <p className={`text-sm font-medium`}>public key:</p>
        <p className={`text-sm text-gray-500 break-all`}>{publicKey}</p>
      </div>
      <div className={`flex justify-center`}>
        <button
          className={`rounded-lg p-2 uppercase bg-primary-500 hover:bg-primary-600 text-white font-medium`}
          onClick={() => handleGetPrivateKey()}
        >
          get keys
        </button>
      </div>
    </div>
  );
};
