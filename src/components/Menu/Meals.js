import MealItem from "./MealItem";
import Card from '../UI/Card/Card';

const Meals = (props) => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  return (
    <Card>
      {DUMMY_MEALS.map((data) => (
        <MealItem
          key={data.id}
          itemName={data.name}
          description={data.description}
          price={data.price}
        />
      ))}
    </Card>
  );
};

export default Meals;
