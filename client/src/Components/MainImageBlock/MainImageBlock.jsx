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
  

const MainImageBlock = () => {
    const [droppedItem, setDroppedItem] = useState(null);
    const [selectedProductImg, setSelectedProductImg] = useState(purpleJacket);

    const onDrop = () => {
        setDroppedItem(selectedProductImg);
    }

    const handleClickBiege = () => {
        setSelectedProductImg(beigeJacket);
    };

    const handleClickPurple = () => {
        setSelectedProductImg(purpleJacket);
    };

    return (
        <div className="main">
            <div className="main__left">
                <div className="main__product">
                    <DraggableItem img={selectedProductImg} />
                    <div className="main__img-colors">
                        <img className="main__img-color" src={purpleJacket} onClick={handleClickPurple}/>
                        <img className="main__img-color" src={beigeJacket} onClick={handleClickBiege}/>
                    </div>
                </div>
            </div>
            <div className="main__center">
                <img className="main__img" src={model}/>
                {droppedItem && <div className="main__img-selected-background"></div>}
                {droppedItem && <img className="main__img-selected" src={selectedProductImg}/>}
                {droppedItem && <img className="main__img-legs" src={modelLegs}/>}
                <DropTarget onDrop={onDrop} />
            </div>
            <div className="main__right"></div>
        </div>
    )

}

export default MainImageBlock;