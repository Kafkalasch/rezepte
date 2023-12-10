interface Props {
    amount: number;
    unit: string;
    ingredient: string;
}

export const IngredientRow: React.FC<Props> = (props: Readonly<Props>) => {
    const { amount, unit, ingredient } = props;
    const text = amount + " " + unit + " " + ingredient;
    return <span itemProp="recipeIngredient">text</span>;
};
