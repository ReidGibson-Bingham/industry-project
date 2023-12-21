import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import model from './../../assets/models/female_model.png';
import modelLegs from './../../assets/models/female_model_legs.png';
import purpleJacketModel1 from './../../assets/jackets/purple-jacket-model-1.png';
import beigeJacketModel1 from './../../assets/jackets/beige-jacket-model-1.png';
import yellowJacketModel2 from './../../assets/jackets/yellow-jacket-model-2.png';
import brownJacketModel2 from './../../assets/jackets/brown-jacket-model-2.png';
import './MainImageBlock.scss';

const DraggableItem = ({ img, index, handleSelectProduct }) => {
    const [, drag] = useDrag({
        type: 'ITEM',
    });

    return (
        <div ref={drag} style={{ border: '1px solid #000', padding: '8px', cursor: 'move' }} onClick={() => handleSelectProduct(index)}>
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
    "image": purpleJacketModel1,
    "colorImages": [{
        color: 'purple',
        image: purpleJacketModel1,
    }, {
        color: 'beige',
        image: beigeJacketModel1,
    }],
}, {
    "name": "BETA LT JACKET WOMEN'S",
    "description": "Full protection in a lightweight (LT), versatile, comfortable GORE-TEX shell. Beta Series: All round mountain apparel. | LT: Lightweight.",
    "price": '$550.00',
    "image": yellowJacketModel2,
    "colorImages": [{
        color: 'purple',
        image: yellowJacketModel2,
    }, {
        color: 'beige',
        image: brownJacketModel2,
    }],
}];

const MainImageBlock = () => {
    const [droppedItem, setDroppedItem] = useState(null);
    const [products, setProducts] = useState(jackets);
    const [selectedProduct, setSelectedProduct] = useState(jackets[0]);

    const onDrop = () => {
        setDroppedItem(selectedProduct);
    }

    const handleSelectColor = ({ productIndex, colorIndex }) => {
        const newProducts = products.map((product, index) => {
            const _product = { ...product };
            
            if (index === productIndex) {
                _product.image = products[productIndex].colorImages[colorIndex].image;
            }

            return _product;
        })
        setProducts(newProducts);
        setSelectedProduct(newProducts[productIndex]);
    };

    const handleSelectProduct = (index) => {
        debugger;
        setSelectedProduct(products[index]);
    };

    return (
        <div className="main">
            <div className="main__left">
                <div className="main__product-list">
                    {products.map((item, index) => (
                        <div key={index} className="main__product">
                            <DraggableItem img={item.image} index={index} handleSelectProduct={handleSelectProduct} />
                            <div className="main__img-colors">
                                {item.colorImages.map((item, colorIndex) => (
                                    <img key={colorIndex} className="main__img-color" src={item.image} onClick={() => handleSelectColor({ productIndex: index, colorIndex })}/>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="main__center">
                <img className="main__img" src={model}/>
                {droppedItem && <div className="main__img-selected-background"></div>}
                {droppedItem && <img className="main__img-selected" src={selectedProduct.image}/>}
                {droppedItem && <img className="main__img-legs" src={modelLegs}/>}
                <DropTarget onDrop={onDrop} />
            </div>
            <div className="main__right">
                <h2 className="main__right-product-header">{selectedProduct.name}</h2>
                <p className="main__right-product-description">{selectedProduct.description}</p>
                <p className="main__right-product-price">{selectedProduct.price}</p>
                <p>Your size: <b>S</b></p>
                <p>Colour: <b>{selectedProduct.color ?? ''}</b></p>
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