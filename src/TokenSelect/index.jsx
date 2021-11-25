import React, { useState, useMemo } from 'react'
import { WindowedMenuList, createFilter, components } from 'react-windowed-select'
import Creatable from 'react-select/creatable'

import styles from './token-select.module.scss'

import { Button } from "@consta/uikit/Button"

import Modal from '../Modal'

const Option = ({ children, data: { label, logo, symbol }, ...props }) => {
    const { onMouseMove, onMouseOver, ...rest } = props.innerProps;
    const newProps = Object.assign(props, { innerProps: rest });

    return (
      <components.Option
        {...newProps}
        style={{ padding: 0 }}
      >
        <div className={styles.option}>
            <div className={styles.logo} style={{ backgroundImage: logo ? `url(${logo})` : undefined }} />
            <div>
                <div className={styles.label}>{label}</div>
                <div className={styles.symbol}>{symbol}</div>
            </div>
        </div>
      </components.Option>
    );
  };

const TOP_LIST = [
    {
        label: 'Ethereum',
        value: 'ethereum',
        symbol: 'ETH',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg'
    },
    {
        label: 'Art Blocks',
        logo: "https://lh3.googleusercontent.com/sdPql8yt3eT5qmQfbCoU8a1I6aMNsqQEj6D1fMTuw101XKILNmzp7QVsdkGff2T39MgcHT-Aha18cWBqjCdhzRWzBw=s120",
        address: "0x059edd72cd353df5106d2b9cc5ab83a52287ac3a",
        symbol: 'BLOCKS'
    }
]


const TokenSelect = (props) => {
    const { tokenList, onSelect } = props

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedToken, setSelectedToken] = useState(null)

    const tokenSelectBoxRows = useMemo(() => {
        return [
          {
            label: 'Ethereum',
            value: 'ethereum',
            symbol: 'ETH',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg'
          },
          ...tokenList.map(t => ({
            label: t.name,
            value: t.address,
            standard: t.standard,
            logo: t.logoURI,
            symbol: t.symbol
          }))
        ]
      }, [tokenList])

    const handleSelect = () => {
        onSelect(selectedToken)
        setModalIsOpen(false)
    }

    const checkForSelected = (token) => {
      if (token
        && token['symbol']
        && selectedToken
        && token['symbol'] === selectedToken['symbol']) {
        return styles.selected
      } else {
        return styles.notSelected
      }
    }

    return (
        <>
            <Button
                view="clear"
                label="Search for a token/NFT"
                onClick={() => setModalIsOpen(true)}
            />

            <Modal
                className={styles.modal}
                darkMode
                isOpen={modalIsOpen}
                hasOverlay
                title="Select a token"
                onClose={() => setModalIsOpen(false)}
            >
                <div className={styles.modalInner}>
                    <div>
                        <label>Top Tokens/NFTS</label>
                        <div className={styles.topTokens}>
                            {TOP_LIST.map((t, i) => (
                                <div
                                    className={checkForSelected(t)}
                                    key={t.symbol}
                                    onClick={(e) => {
                                      setSelectedToken(t)
                                    }}
                                >
                                    <div className={styles.logo} style={{ backgroundImage: t.logo ? `url(${t.logo})` : undefined }} />
                                    <div className={styles.symbol}>{t.symbol}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.search}>
                        <label>Search</label>
                        <Creatable
                            filterOption={createFilter({ignoreAccents: false})}
                            classNamePrefix="react-select"
                            components={{ Option, MenuList: WindowedMenuList }}
                            isClearable
                            isSearchable
                            defaultValue={''}
                            options={tokenSelectBoxRows}
                            menuPortalTarget={document.body}
                            onChange={setSelectedToken}
                        />
                    </div>

                    <Button
                        className={styles.button}
                        label="Select"
                        size="l"
                        disabled={!selectedToken}
                        onClick={handleSelect}
                    />
                </div>
            </Modal>
        </>
    )
}

export default TokenSelect
