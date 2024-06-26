import { useState } from "react";

import { FiCreditCard, FiEye, FiEyeOff, FiFileText } from "react-icons/fi";

import { CARDS_ANIMATION, CONTAINER_ANIMATION } from "./animations";
import {
  AnimatedCard,
  AnimatedContainer,
  DataWrapper,
  Header,
  LeftData,
  RightData,
} from "./styles";

import { PlataformaPaiIcon } from "../../../../assets/images/icons";
import CreditCardIllustration from "../../../../assets/images/illustrations/card-illustration.png";
import Button from "../../../../components/Button";
import { DEFAULT_TRANSITION } from "../../../../constants";

const AccountSummary = () => {
  // const { statements, investments } = useAuth().account;

  const [displayStatement, setDisplayStatement] = useState(true);
  const [displayInvestments, setDisplayInvestments] = useState(true);

  // const currentMonth = statements?.[statements.length - 1];

  // const investmentGrowth = useMemo(() => {
  //   const { data: investmentsData } = investments.timeline[0];
  //   const { y } = investmentsData[investmentsData.length - 1];

  //   return formatChartValue(y);
  // }, [investments]);

  return (
    <AnimatedContainer variants={CONTAINER_ANIMATION}>
      <AnimatedCard
        key="statement"
        variants={CARDS_ANIMATION}
        transition={DEFAULT_TRANSITION}
      >
        <Header iconStroke>
          <FiFileText />
          <h3>Extrato</h3>
          <Button
            onClick={() => setDisplayStatement((prevState) => !prevState)}
            variant="transparent"
          >
            {displayStatement ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>

        <DataWrapper>
          <LeftData>
            {/* <ResponsiveBar
              data={displayStatement ? statements : hiddenStatements}
              indexBy="month"
              keys={["outcome", "balance"]}
              colors={({ id, data }) => data[`${id}Color`]}
              margin={{ top: 8, right: -8, bottom: 24, left: -8 }}
              padding={0.88}
              borderRadius={2}
              axisTop={null}
              axisRight={null}
              axisLeft={null}
              axisBottom={{
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
              }}
              tooltip={(chart) => {
                const label = chart.id === "balance" ? "Receita" : "Despesas";
                const value = chart.data[chart.id];
                return (
                  <CustomTooltip
                    rightArrow={chart.index >= 3}
                    leftArrow={chart.index < 3}
                  >
                    {`${label}: ${formatCurrency(+value)
                      .replace(" ", "")
                      .replace("-", "")}`}
                  </CustomTooltip>
                );
              }}
              theme={{
                tooltip: {
                  container: {
                    background: "transparent",
                    boxShadow: "none",
                    padding: 0,
                    borderRadius: 0,
                  },
                  tableCell: {
                    padding: 0,
                  },
                },
              }}
              animate
              // motionStiffness={90}
              // motionDamping={15}
              enableGridY={false}
              enableLabel={false}
            /> */}
          </LeftData>
          {/* <RightData>
            <span>Receita</span>
            <DataValue balance>
              {displayStatement ? formatCurrency(currentMonth?.balance) : "---"}
            </DataValue>
            <span>Despesas</span>
            <DataValue outcome>
              {displayStatement
                ? formatCurrency(currentMonth?.outcome).replace("-", "")
                : "---"}
            </DataValue>
          </RightData> */}
        </DataWrapper>
      </AnimatedCard>
      <AnimatedCard
        key="credit-card"
        variants={CARDS_ANIMATION}
        transition={DEFAULT_TRANSITION}
      >
        <Header iconStroke>
          <FiCreditCard />
          <h3>MasterCard 8430</h3>
        </Header>

        <DataWrapper>
          <LeftData>
            <img
              src={CreditCardIllustration}
              alt="Cartão de Crédito Sem Anuidade"
            />
          </LeftData>
          <RightData>
            <span>Seu cartão é MasterCard e sem anuidade!</span>
          </RightData>
        </DataWrapper>
      </AnimatedCard>
      <AnimatedCard
        key="investments"
        variants={CARDS_ANIMATION}
        transition={DEFAULT_TRANSITION}
      >
        <Header iconStroke={false}>
          <PlataformaPaiIcon />
          <h3>Plataforma Aberta Inter</h3>
          <Button
            onClick={() => setDisplayInvestments((prevState) => !prevState)}
            variant="transparent"
          >
            {displayInvestments ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>

        <DataWrapper>
          {/* <LeftData>
            <ResponsiveLine
              data={
                displayInvestments ? investments.timeline : hiddenInvestments
              }
              useMesh
              enableCrosshair={false}
              curve="cardinal"
              margin={{ top: 8, right: 8, bottom: 24, left: 12 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
              }}
              tooltip={({ point }) => {
                return (
                  <CustomTooltip>
                    {formatChartValue(point.data.yFormatted)}
                  </CustomTooltip>
                );
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                // orient: "bottom",
                tickSize: 0,
                tickPadding: 8,
                tickRotation: 0,
              }}
              axisLeft={null}
              colors={colors.success}
              lineWidth={1.5}
              pointSize={8}
              pointColor={colors.success}
              pointLabel="y"
              pointLabelYOffset={-12}
              enableGridY={false}
            />
          </LeftData>
          <RightData>
            <span>Total investido</span>
            <DataValue>
              {displayInvestments ? investments.amount : "---"}
            </DataValue>
            <span>Evolução no mês</span>
            <DataValue>
              {displayInvestments ? investmentGrowth : "---"}
            </DataValue>
          </RightData> */}
        </DataWrapper>
      </AnimatedCard>
    </AnimatedContainer>
  );
};

export default AccountSummary;
