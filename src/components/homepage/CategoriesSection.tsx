
import CategoryCard, { CategoryCardProps } from "../CategoryCard"
import IconBaseballBatBall from "../icons/IconBaseballBatBall"
import IconBook from "../icons/IconBook"
import IconDevices from "../icons/IconDevices"
import IconFood from "../icons/IconFood"
import IconLaptop from "../icons/IconLaptop"
import IconMedicine from "../icons/IconMedicine"
import IconRobotics from "../icons/IconRobotics"
import IconShirt from "../icons/IconShirt"

const logoClassName : string = "w-16 h-16 my-5"

export const categories: CategoryCardProps[] = [
    {
        title: "Laptop",
        image: <IconLaptop className={logoClassName} />,
    },
    {
        title : "Dress",
        image : <IconShirt className={logoClassName} />
    },
    {
        title : "Electronic Devices",
        image : <IconDevices className={logoClassName} />
    },
    {
        title : "Books",
        image : <IconBook className={logoClassName} />
    },
    {
        title : "Sports",
        image : <IconBaseballBatBall className={logoClassName} />
    },
    {
        title : "Sports",
        image : <IconMedicine className={logoClassName} />
    },
    {
        title : "Food",
        image : <IconFood className={logoClassName} />
    },
 {
        title : "Robotics",
        image : <IconRobotics className={logoClassName} />
    },
]

function CategoriesSection() {
    return (
        <section className="flex justify-center items-center flex-wrap">
            {categories.map(item => <CategoryCard key={item.title} title={item.title} image={item.image} />)}
        </section>
    )
}

export default CategoriesSection