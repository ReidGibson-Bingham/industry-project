import { useState } from 'react';
import { useDrop } from 'react-dnd';

import model from './../../assets/models/female_model.png';
import modelLegs from './../../assets/models/female_model_legs.png';
import purpleJacketModel1 from './../../assets/jackets/purple-jacket-model-1.png';
import beigeJacketModel1 from './../../assets/jackets/beige-jacket-model-1.png';
import yellowJacketModel2 from './../../assets/jackets/yellow-jacket-model-2.png';
import brownJacketModel2 from './../../assets/jackets/brown-jacket-model-2.png';
import './MainImageBlock.scss';

import ProductsList from '../ProductList/ProductList';
import CategoryList from '../CategoryList/CategoryList';
import ProductDetails from '../ProductDetails/ProductDetails';

const categories = [{
    type: 'shell-jackets',
    label: 'Shell Jackets',
}, {
    type: 'insulated-jackets',
    label: 'Insulated Jackets',
}]


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
    const [selectedCategory, setSelectedCategoty] = useState();

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
        setSelectedProduct(products[index]);
    };

    const handleSelectCategory = (category) => {
        // setProducts();
        setSelectedCategoty(category);
    }

    return (
        <div className="main">
            <div className="main__left">
                {!selectedCategory && <CategoryList categories={categories} handleSelectCategory={handleSelectCategory} />}
                {selectedCategory && <ProductsList products={products} category={selectedCategory} handleSelectProduct={handleSelectProduct} handleSelectColor={handleSelectColor} />}
            </div>
            <div className="main__center">
                <img className="main__img" src={model}/>
                {droppedItem && <div className="main__img-selected-background"></div>}
                {droppedItem && <img className="main__img-selected" src={selectedProduct.image}/>}
                {droppedItem && <img className="main__img-legs" src={modelLegs}/>}
                <DropTarget onDrop={onDrop} />
            </div>
            <div className="main__right">
                {selectedCategory && <ProductDetails product={selectedProduct} />}
                {!selectedCategory && <div >Please choose Category</div>}
            </div>
        </div>
    )

}

export default MainImageBlock;