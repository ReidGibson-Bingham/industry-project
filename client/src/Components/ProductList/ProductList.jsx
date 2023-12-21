import { useDrag } from 'react-dnd';

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

const ProductsList = ({ products = [], category, handleSelectProduct, handleSelectColor }) => {
    return (
        <>
            <h2>{category.label}</h2>
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
        </>
    )
}

export default ProductsList;