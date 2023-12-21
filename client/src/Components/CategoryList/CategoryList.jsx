const CategoryList = ({ categories = [], handleSelectCategory }) => {
    return (
        <>
            <h2>Categories</h2>
            {categories.map((item, index) => (
                <div key={index} onClick={() => handleSelectCategory(item)}>
                    {item.label}
                </div>
            ))}
        </>
    )
};

export default CategoryList;