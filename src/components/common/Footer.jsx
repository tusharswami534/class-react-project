import React from 'react'
import { FacebookIcon } from './Icon'
import { PLAYER_DATA } from './Helper'

export const Footer = () => {
    return (
        <>
            <FacebookIcon />
            {PLAYER_DATA.map((obj, index) => (
                <div key={index}>
                    <h2>{obj.heading}</h2>
                    <p>{obj.playerInfo}</p>
                    {obj.content.map((val, i) => (
                        <p key={i}>{val.item}</p>
                    )
                    )}
                </div>
            )
            )}
        </>
    )
}
