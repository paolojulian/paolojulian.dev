import { gql } from "@apollo/client";
import {
  PSectionHeader,
  PTypography,
  Row,
  Stack,
} from "@paolojulian.dev/design-system";
import dayjs from "dayjs";
import { Portfolio } from "../../../graphql/portfolio.types";
import { YearsOfExperienceText } from "./atoms/years-of-experience-text";
import TypographyHighlight from "./typography-highlight";

interface Props {
  portfolio: Pick<
    Portfolio,
    "experience" | "careersCollection" | "toolsCollection"
  >;
}
export default function CareerSection({ portfolio }: Props) {
  const formattedCareers = [...portfolio.careersCollection.items]
    .sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
    )
    .map((item, i) => ({
      ...item,
      formattedStartDate:
        i === 0 ? "NOW" : dayjs(item.startDate).format("YYYY"),
    }));

  return (
    <section
      id={"experience"}
      aria-label="Experience section"
      className="py-[100px] md:py-[200px]"
    >
      <Stack className="gap-24 md:gap-52">
        <Stack className="gap-10">
          <PSectionHeader title="Experience" />
          <PTypography variant="heading-lg">
            With <YearsOfExperienceText /> of experience in web and mobile{" "}
            development. I have primarily worked on{" "}
            <TypographyHighlight>commercial</TypographyHighlight> and{" "}
            <TypographyHighlight>productivity apps</TypographyHighlight>.
          </PTypography>
        </Stack>
        <Stack className="gap-10">
          <PTypography variant={"body-wide"}>TECH STACK</PTypography>
          <div className="border-b border-stone-700">
            {portfolio.toolsCollection.items.map(({ name, items }, i) => (
              <ToolItem key={`${name}_${i}`} type={name} tools={items} />
            ))}
          </div>
        </Stack>
        <Stack className="gap-10">
          <PTypography variant={"body-wide"}>CAREER</PTypography>
          <div className="border-b border-stone-700">
            {formattedCareers.map((careerItem, i) => (
              <CareerItem
                key={`${careerItem.title}_${i}`}
                year={careerItem.formattedStartDate}
                position={careerItem.title}
                company={careerItem.company}
              />
            ))}
          </div>
        </Stack>
      </Stack>
    </section>
  );
}

interface CareerItemProps {
  year: string;
  position: string;
  company: string;
}
function CareerItem({ year, position, company }: CareerItemProps) {
  return (
    <Row className="py-6 md:py-10 items-start border-t border-stone-700">
      <PTypography variant="heading" className="uppercase w-[25%]">
        {year}
      </PTypography>
      <Stack className="md:gap-4">
        <PTypography variant={"heading"}>{position}</PTypography>
        <PTypography variant="body">{company}</PTypography>
      </Stack>
    </Row>
  );
}

interface ToolItemProps {
  type: string;
  tools: string[];
}
function ToolItem({ type, tools = [] }: ToolItemProps) {
  return (
    <Row className="py-6 md:py-10 items-start border-t border-stone-700">
      <PTypography variant="heading" className="w-[25%] capitalize">
        {type}
      </PTypography>
      <Stack className="md:gap-4">
        {tools.map((tool, i) => (
          <PTypography key={i} variant={"heading"}>
            {tool} {i !== tools.length - 1 ? "/" : ""}
          </PTypography>
        ))}
      </Stack>
    </Row>
  );
}

CareerSection.fragments = {
  portfolio: gql`
    fragment CareerFragment on Portfolio {
      experience
      toolsCollection {
        items {
          name
          items
        }
      }
      careersCollection {
        items {
          title
          company
          startDate
        }
      }
    }
  `,
};
