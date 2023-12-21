import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import model from './../../assets/models/female_model.png';
import modelLegs from './../../assets/models/female_model_legs.png';
import purpleJacket from './../../assets/jackets/purple-jacket.png';
import beigeJacket from './../../assets/jackets/beige-jacket.png';
import './MainImageBlock.scss';

const DraggableItem = ({ img }) => {
    const [, drag] = useDrag({
        type: 'ITEM',
    });

    return (
        <div ref={drag} style={{ border: '1px solid #000', padding: '8px', margin: '8px', cursor: 'move' }}>
            <img className="main__left-img" src={img} />
        </div>
    );
};

const DropTarget = ({ onDrop }) => {
    const [, drop] = useDrop({
      accept: 'ITEM',
      drop: (item) => onDrop(item),
    });
  
    return (
      <div ref={drop} className="main__droparea">
      </div>
    );
  };

const jackets = [{
    "name": "ATOM JACKET WOMEN'S",
    "description": "Light, versatile synthetic insulated jacket works as a midlayer and standalone. Atom Series: Synthetic insulated midlayers.",
    "price": '$340.00',
    "colorImages": [{
        color: 'purple',
        image: purpleJacket,
    }, {
        color: 'beige',
        image: beigeJacket,
    }],
    "features": [
        "Versatile synthetic insulation",
        "Suitable as a midlayer or standalone jacket",
        "Sleek and timeless design"
    ]
}];

const MainImageBlock = () => {
    const [droppedItem, setDroppedItem] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(jackets[0]);
    const [selectedProductColor, setSelectedProductColor] = useState(jackets[0].colorImages[0]);

    const onDrop = () => {
        setDroppedItem(selectedProduct);
    }

    const handleSelectColor = (index) => {
        setSelectedProductColor(selectedProduct.colorImages[index]);
    };

    return (
        <div className="main">
            <div className="main__left">
                <div className="main__product">
                    <DraggableItem img={selectedProductColor.image} />
                    <div className="main__img-colors">
                        {selectedProduct.colorImages.map((item, index) => (
                            <img className="main__img-color" src={item.image} onClick={() => handleSelectColor(index)}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="main__center">
                <img className="main__img" src={model}/>
                {droppedItem && <div className="main__img-selected-background"></div>}
                {droppedItem && <img className="main__img-selected" src={selectedProductColor.image}/>}
                {droppedItem && <img className="main__img-legs" src={modelLegs}/>}
                <DropTarget onDrop={onDrop} />
            </div>
            <div className="main__right">
                <h2 className="main__right-product-header">{selectedProduct.name}</h2>
                <p className="main__right-product-description">{selectedProduct.description}</p>
                <p className="main__right-product-price">{selectedProduct.price}</p>
                <p>Your size: <b>S</b></p>
                <p>Colour: <b>{selectedProductColor.color ?? ''}</b></p>
                <div className="main__right-size-list">
                    <div className="main__right-size-list-item">
                        XXS
                    </div>
                    <div className="main__right-size-list-item">
                        XS
                    </div>
                    <div className="main__right-size-list-item main__right-size-list-item--selected">
                        S
                    </div>
                    <div className="main__right-size-list-item">
                        M
                    </div>
                    <div className="main__right-size-list-item">
                        L
                    </div>
                    <div className="main__right-size-list-item">
                        XL
                    </div>
                    <div className="main__right-size-list-item">
                        XLL
                    </div>
                </div>
                <button className="main__right-buy-button">Add to Cart</button>

                <p>FREE SHIPPING / FREE RETURNS</p>
                <p>BUY ONLINE. PICK UP AT A STORE.</p>
                <p>Arc'teryx Vancouver‑ Low Stock</p>
            </div>
        </div>
    )

}

export default MainImageBlock;