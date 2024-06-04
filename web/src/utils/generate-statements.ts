import { faker } from "@faker-js/faker";
import generateMonthsInterval from "./generate-months-interval";
import theme from "../styles/themes/light";

export type GeneratedStatement = {
  month: string;
  balance: number;
  incomeColor: string;
  outcome: number;
  outcomeColor: string;
};

export type GenerateStatements = (
  visible?: boolean
) => Array<GeneratedStatement>;

const generateStatements: GenerateStatements = (visible = true) => {
  const currentMonthsInterval = generateMonthsInterval();

  return currentMonthsInterval.map((month) => {
    const balance = visible ? +faker.finance.amount(4750, 8000, 2) : 1;
    const outcome = visible
      ? +faker.finance.amount(-balance + 150, -2750, 2)
      : -1;

    return {
      month,
      balance,
      incomeColor: theme.colors.success,
      outcome,
      outcomeColor: theme.colors.error,
    };
  });
};

export default generateStatements;
