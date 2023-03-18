import React, { useCallback, useState } from "react";
import { nip19 } from "nostr-tools";
import { IoMdCopy } from "react-icons/io";

import { generatePrivateKey, getPublicKey } from "nostr-tools";

export const MainPage = () => {
  const [privateKey, setPrivateKey] = useState<string>("");
  const [publicKey, setPublicKey] = useState<string>("");

  const handleGetKeys = useCallback(() => {
    const pk = generatePrivateKey(); // generate private key
    setPrivateKey(pk);
    const pubKey = getPublicKey(pk); // get public key
    setPublicKey(nip19.npubEncode(pubKey));
  }, []);

  const handleCopy = async (key: string) => {
    await navigator.clipboard.writeText(key);
  };

  return (
    <div>
      <header className={``}>
        <h1 className={`text-lg font-medium text-gray-500 text-center`}>
          nostr-wallet
        </h1>
      </header>
      <div className={`h-96`}>
        <div className={`h-32`}>
          <div className={`text-sm font-medium`}>private key:</div>
          <div className={`text-sm text-gray-500 break-all flex`}>
            {privateKey}
            {privateKey && (
              <button onClick={() => handleCopy(privateKey)}>
                <IoMdCopy className={`h-5 w-5 hover:text-gray-700`} />
              </button>
            )}
          </div>
        </div>
        <div className={`h-32`}>
          <div className={`text-sm font-medium`}>public key:</div>
          <div className={`text-sm text-gray-500 break-all flex`}>
            {publicKey}
            {publicKey && (
              <button onClick={() => handleCopy(publicKey)}>
                <IoMdCopy className={`h-5 w-5 hover:text-gray-700`} />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={`flex justify-center`}>
        <button
          className={`rounded-lg p-2 uppercase bg-primary-500 hover:bg-primary-600 text-white font-medium`}
          onClick={handleGetKeys}
        >
          generate a new key pair
        </button>
      </div>
    </div>
  );
};
