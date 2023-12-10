import { Ingredient } from "@site/src/model/ingredient";
import { IngredientRow } from "../IngredientRow";

interface Props {
    ingredients: Ingredient[];
}

export const Ingredients: React.FC<Props> = (props: Readonly<Props>) => {
    const { ingredients } = props;

    return (
        <div>
            {ingredients.map((i) => (
                <IngredientRow
                    key={i.item}
                    amount={i.amount}
                    unit={i.unit}
                    ingredient={i.item}
                />
            ))}
        </div>
    );
};
