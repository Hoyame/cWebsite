import React, { useState } from 'react'

import '../../styles/shop/shop.scss'

interface IShopProps {
    id: number;
    lang: number;
    name: string;
    desc: string;
    prix: number;
    sop?: boolean;
    link?: string;
}

const LangageImg = [
    "https://www.taniarascia.com/static/ed9878c0488cff7b7ee973c201f0bb68/92ab1/ts.png", // ts
    "https://cdn.discordapp.com/attachments/836192469359394856/838191633907318804/Lua-logo-nolabel.png", // lua
    "https://www.taniarascia.com/static/5e267e2ee412a23e797106ee564145a0/92ab1/js.png", // js
    "https://www.taniarascia.com/static/d695fe69198cc4558284e9aec1a4892c/92ab1/react.png", // react
    "https://www.taniarascia.com/static/517c02bd875932e2a959488763695b28/92ab1/node.png", // node
    "https://cdn.discordapp.com/attachments/836192469359394856/838192313641074718/fivem-logo.png", // fivem

]


const ShopData: IShopProps[] = [
    { id: 0, name: 'Amonaguyem', lang: 5, desc: 'Ananasikim, sikimiiyalla', prix: 250 },
    { id: 1, name: 'Amonaguyem', lang: 0, desc: 'Ananasikim, sikimiiyalla', prix: 250 },
    { id: 2, name: 'Amonaguyem', lang: 3, desc: 'Ananasikim, sikimiiyalla', prix: 250 },
    { id: 3, name: 'Amonaguyem', lang: 2, desc: 'Ananasikim, sikimiiyalla', prix: 250 },
    { id: 4, name: 'Amonaguyem', lang: 1, desc: 'Ananasikim, sikimiiyalla', prix: 250 },
]

const ShopPage = () => {
    const [panier, setPanier] = useState([
        { id: 0, name: '', lang: 5, desc: '', prix: 0 },
    ]);

    const ShopProp = (zboubi: IShopProps) => {
        const [isOpened, setOpened] = useState(false);

        return (
            <>
                {   zboubi.name !== "" ?

                    <div className={isOpened ? "container-shop showcase" : "container-shop"} onClick={() => setOpened(!isOpened)}>
                        <div className="amonaguyem">
                            <div className="props"><img className="props-img" src={LangageImg[zboubi.lang]} /></div>
                            <p className="props-text">{zboubi.name}</p>
                            <p className="props-desc">{zboubi.desc}</p>
                            <p className="props-price">{zboubi.prix} €</p>

                            { zboubi.sop == false ?
                                <div className="inherit" onClick={() => setPanier([...panier, {
                                    name: ShopData[zboubi.id].name, 
                                    id: ShopData[zboubi.id].id, 
                                    lang: ShopData[zboubi.id].lang, 
                                    desc: ShopData[zboubi.id].desc, 
                                    prix: ShopData[zboubi.id].prix
                                }])}>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-arrow-down" className="icon svg-inline--fa fa-cart-arrow-down fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path></svg>
                                </div>

                            :
                                <div className="inherit" onClick={() => setPanier(panier.filter(x=> x.id != zboubi.id))}>
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" className="icon svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                                </div>
                            }
                        </div>

                        { isOpened &&
                            <iframe className="zebi" width="800" height="400" src="https://www.youtube.com/embed/1r_9KdV5EME" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        }
                        
                    </div>

                    :

                    <></>
                }
            </>
        );
    }

    const returnElements = () => {
        return ShopData.map((v, k) => {
            return <ShopProp {...v} key={k} sop={false} />
        })
    }

    const returnPanier = () => {
        return panier.map((v, k) => {
            return <ShopProp {...v} key={k} sop={true} /> 
        })
    }

    const returnPrice = () => {
        let price = 0;

        panier.map((v, k) => {
            price = price + v.prix
        })

        return price
    }

    return (
        <>
            <p className="projets-title">Boutique 🎨</p>

            <div className="container">
                {returnElements()}
            </div>

            <p className="projets-title">Panier 🛒</p>
            <p className="niepar-price">Prix du panier: {returnPrice()} €</p>

            <div className="container">
                {returnPanier()}
            </div>    

            {returnPrice() !== 0 &&
                <div className="buy-button">Payer</div>  
            } 
        </>
    );
}

export default ShopPage;