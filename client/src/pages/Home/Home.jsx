import Header from "../../Components/Header/Header";
import MainImageBlock from "../../Components/MainImageBlock/MainImageBlock";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const Home = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <MainImageBlock/>
        </DndProvider>
    )
}

export default Home;